import React from 'react'

export default function Link() {
  return (
     <div className='body'>
      <div className='title'><span className='text-red-500'>K</span>ashsan 製作サイト</div>
      <table>
        <thead>
            <tr>
                <th className='w-1/6 bold'>製作年</th>
                <th className='w-1/6'>サイト名</th>
                <th className='w-3/6'>使用技術</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='w-1/6'>2002年</td>
                <td className='w-1/6'><a href='https://www.k-ash.com'>K-Ash.com</a></td>
                <td className='w-3/6'>HTML CSS JavaScript</td>
            </tr>
            <tr>
                <td className='w-1/6'>2008年</td>
                <td className='w-1/6'><a href='https://www.k-ash.com/mhp'>MHPコンサート</a></td>
                <td className='w-3/6'>HTML CSS JavaScript jQuery</td>
            </tr>
            <tr>
                <td className='w-1/6'>2010年</td>
                <td className='w-1/6'><a href='https://www.k-ash.com/fukuya'>和菓子の福屋</a></td>
                <td className='w-3/6'>HTML CSS JavaScript jQuery</td>
            </tr>
            <tr>
                <td className='w-1/6'>2025年</td>
                <td className='w-1/6'><a href='https://www.k-ash.com/travel_website'>トラベル(Demo)</a></td>
                <td className='w-3/6'>HTML CSS JavaScript jQuery</td>
            </tr>
            <tr>
                <td className='w-1/6'>2025年</td>
                <td className='w-1/6'><a href='https://k-ashtestsite.ddns.net'>SNSアプリ</a></td>
                <td className='w-3/6'>Vue Laravel Linux Server</td>
            </tr>
        </tbody>
        
      </table>
    </div>
  )
}
