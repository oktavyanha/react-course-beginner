import React, {useCallback} from "react";
import { useForm } from "react-hook-form";
import Button from '../Button'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'
import appwriteService from '../../appwrite/config'
import { useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";

export default function PostForm({post}){
  
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({ //using this 'useForm' we dont need 'useState', the variable is default
    defaultValues:{
      title : post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active'
    }
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData) //check 'store' folder for more info

  const submit = async(data) => {
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0] ) : null

      if (file) {
        appwriteService.deleteFile(post.featuredImage)
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined
      })

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appwriteService.createPost({...data, userId: userData.$id})

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) => { 
    if(value && typeof value === 'string'){
      return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-').replace(/\s/g, '-')
    }
  }, [])

  React.useEffect(() => { 
    watch((value, {name}) => {
      if (name === 'title'){
        setValue('slug', slugTransform(value.title), {shouldValidate: true})
      }
    })
  }, [watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)}
    className="flex flex-wrap"
    action=""
    >
      <div className="w-2/3 px-2">
        <Input
        label='Title'
        placeholder='Title'
        className='mb-4'
        {...register('title', {required: true})} //this code is the reason the 'watch' always update
        />
        <Input 
        label='Slug:'
        placeholder='Slug'
        className='mb-4'
        {...register('slug', {required: true})} // will grabed by 'watch' so it update automatically
        onInput={(e) => {
          setValue('slug', slugTransform(e.currentTarget.value), {shouldValidate: true})
        }}
        />
        <RTE
        label='Content: '
        name='content'
        control={control} //varibel returned by 'useForm'
        defaultValue={getValues('content')}
        />
      </div>
      <div className="1/3 px-2">
        <Input 
        label='Featured Image'
        type='file'
        className='mb-4'
        accept='image/png, image/jpg, image/jpeg'
        {...register('image'), {required: !post}}
        />
        {post && (
          <div className="w-full mb-4">
            <img src={appwriteService.getFilePreview(post.featuredImage)} 
            alt={post.title} 
            className="rounded-lg"
            />
          </div>
        )}
        <Select
        options={['active', 'inactive']}
        label='status'
        className='mb-4'
        {...register('status', {required: true})}
        />
        <Button
        type="submit"
        bgColor={post ? 'bg-green-500' : undefined}
        className="w-full"
        >
          {post ? 'update' : 'submit'}
        </Button>
      </div>
    </form>
  )
}