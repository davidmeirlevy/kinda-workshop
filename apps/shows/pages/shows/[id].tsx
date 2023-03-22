import React from 'react';
import Image from 'next/image';
import styles from './Show.module.css';

export default function Show({ show }) {
    const handleAddToCart = () => {
        console.log(`Show ${show.name} added to cart!`);
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.imageContainer }>
                <Image
                    src={ show.image.medium }
                    alt={ show.name }
                    width={ 500 }
                    height={ 500 }
                />
            </div>
            <div className={ styles.detailsContainer}>
                <h1 className={ styles.title }>{ show.name }</h1>
                <div className={ styles.summary } dangerouslySetInnerHTML={ {__html: show.summary} } />
                <button className={ styles.addToCartButton } onClick={ handleAddToCart }>Add to Cart</button>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://api.tvmaze.com/shows')
    const shows = await res.json()
  
    const paths = shows.map((show: any) => ({
      params: { id: show.id.toString() }
    }))
  
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
    const show = await res.json();
  
    return {
        props: {
            show
        },
        revalidate: 1000,
    };
  };
  