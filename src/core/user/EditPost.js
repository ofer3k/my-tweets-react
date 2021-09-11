import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { deletePostServer,updatePostServer } from '../../server';

export default function EditPost(props) {
    const {post}=props
    const [updatePost,setUpdatePost]=useState({title:post.title,content:post.content})

    const handleChange=(e)=>{
        setUpdatePost({...updatePost,[e.target.name]:e.target.value})
    }

    const handleSubmit=async()=>{
        const answer=await updatePostServer({title:updatePost.title,content:updatePost.content,_id:post._id})
        console.log(answer)
    }
    const handleDelete=async()=>{
        try {
            const answer=await deletePostServer({_id:post._id})
            if(answer.deletedCount===1)
                {
                   window.location.reload();  
                }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <Form key={props.key} style={{width:'60%',margin:'0 auto'}}>
              <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control name={'title'} onChange={handleChange} type="email" placeholder={post.title} />
              </Form.Group>
              <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control name={'content'} onChange={handleChange} as="textarea" placeholder={post.content} rows={2} />
              </Form.Group>
              <span className={'flex_buttons'}>
              <Button onClick={handleSubmit} style={{border:'2px solid black',opacity:'0.8'}} variant="outline-secondary">Update</Button>
              <Button onClick={handleDelete} style={{border:'2px solid red',color:'red', opacity:'0.8'}} variant="outline-secondary">Delete</Button>
              </span>
            <hr/>
            </Form>
    )
}
