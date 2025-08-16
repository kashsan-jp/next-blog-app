import React from 'react'
import { links } from './links'

const jsonLinks = links

export default function Link() {
  return (
    <>
     <div className='body'>
      <div className='title'><span className='text-red-500'>K</span>ashsan 製作サイト</div>
      <p className='text-center text-green-700'>サイト名をクリックするとリンク先に飛びます</p>
      <table>
        <thead>
            <tr>
                <th className='w-1/6 bold'>製作年</th>
                <th className='w-1/6'>サイト名</th>
                <th className='w-3/6'>使用技術</th>
            </tr>
        </thead>
        <tbody>
            {jsonLinks.map((link) => (
                <tr key={link.id}>
                    <td>{link.date}</td>
                    <td><a href={link.url}>{link.siteName}</a></td>
                    <td>{link.comment}</td>
                </tr>
            ))
            }
        </tbody>
        
      </table>
    </div>
    </>
  )
}
