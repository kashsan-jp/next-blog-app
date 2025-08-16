import Link from 'next/link'
import React from 'react'

export default function Tech() {

  return (
    <div className='body'>
      <div className='title'>このWebアプリの仕様</div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>作成メモ</p>
      <div className='mb-10 p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm'>
        このアプリは自分自身のWeb技術の向上とエラー解決方法を記録に残して置きたく、
        2025年8月にNextjsとMongoDBだけでサクッと作りました。
      </div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>自己紹介</p>
      <div className='p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm border-green-700'>
        1997年HTMLでWebコーディングを始め、 その後 K-Ash.com を立ち上げる。 社会貢献のため 障害者のために MHPコンサートをスタート、 2017年にSwiftで開発を始める。 2020年からReactNative,Flutterの モバイルアプリ開発を始めると同時に React、Vue、Laravel、Nodejsにも 興味を持ち開発を始める。
2025年3月に介護福祉関係の会社を退職し、 現在、個人開発でWebサービス作りに励んでいます。
      </div>
      <Link href="/">
      <div className="text-center text-orange-700 mt-3">戻る</div>
      </Link>
    </div>
  )
}
