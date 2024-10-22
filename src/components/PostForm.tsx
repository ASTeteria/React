import React, {FC} from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {postValidation} from "../validation/ValidationPost";
import {createPost} from "../services/api.service";
import { IPostForm } from '../models/IPostForm';

interface FormProps {
    postSubmit: (newPost: IPostForm) => void;
  }
  
  const PostForm:FC<FormProps> = ({ postSubmit }) => {
    const customHandler = (data: IPostForm) => {
      createPost({
        title: data.title,
        body: data.body,
      }).then((response) => {
        postSubmit(response); 
        alert('Post created');
      });
    };
  
    const {
      handleSubmit,
      register,
      formState: { errors, isValid },
    } = useForm<IPostForm>({
      mode: 'all',
      resolver: joiResolver(postValidation),
    });
  
    return (
      <form onSubmit={handleSubmit(customHandler)}>
        <div>
          <label>Title</label>
          <input type="title" {...register('title')} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label>Body</label>
          <textarea id="body" {...register('body')} />
          {errors.body && <span>{errors.body.message}</span>}
        </div>
        <button type="submit" disabled={!isValid}>Create Post</button>
      </form>
    );
  };
  

export default PostForm;
