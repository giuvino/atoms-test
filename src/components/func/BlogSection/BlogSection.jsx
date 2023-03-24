import React from 'react'
import './blogsection.css'

function BlogSection(props) {
    return (
        <div className='blogBanner'>
            <hr></hr>
            <div className='blogTitleContainer'>
                <h1 className='blogTitle'>{props.blogTitle}</h1>
            </div>
            <hr></hr>
            <div className='blogContainer'>
                <div className='writerContainer'>
                    <img className='writerImage' src={props.Img1}></img>
                    <div className='nameContainer'>
                        <h3>{props.blogArticle1}</h3>
                        <p>{props.blogWriter1}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='blogContainer'>
                <div className='writerContainer'>
                    <img className='writerImage' src={props.Img2}></img>
                    <div className='nameContainer'>
                        <h3>{props.blogArticle2}</h3>
                        <p>{props.blogWriter2}</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='blogContainer'>
                <div className='writerContainer'>
                    <img className='writerImage' src={props.Img3}></img>
                    <h3>{props.blogArticle3}</h3>
                    <p>{props.blogWriter3}</p>
                </div>
            </div>
            <hr></hr>
            <div className='blogContainer'>
                <div className='writerContainer'>
                    <img className='writerImage' src={props.Img4}></img>
                    <h3>{props.blogArticle4}</h3>
                    <p>{props.blogWriter4}</p>
                </div>
            </div>
            <hr></hr>
            <div className='blogContainer'>
                <div className='writerContainer'>
                    <img className='writerImage' src={props.Img5}></img>
                    <h3>{props.blogArticle5}</h3>
                    <p>{props.blogWriter5}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default BlogSection