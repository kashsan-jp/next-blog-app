import Link from 'next/link'
import React from 'react'

export default function Tech() {

  return (
    <div className='body'>
      <div className='title'>製作ノート</div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>
      作成意図
      </p>
      <div className='mb-10 p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm'>
        当Webアプリは自分自身のWeb技術の向上過程とエラー解決方法を記録に残したく、
        技術選定には学習も兼ねてNextjsで製作しました。
      </div>
      <p className='text-center text-green-700 sm:text-sm lg:text-xl'>自己紹介</p>
      <div className='p-2 border border-solid rounded m-auto lg:w-lg sm:w-sm border-green-700'>
        1997年HTMLでWebコーディングを始め、 その後 K-Ash.com を立ち上げる。<br></br> 2010年に社会貢献のためと
        障害者の社会参加のお手伝いのために MHPコンサートをスタート、プロデュースを手がける。 <br></br>2017年にSwiftでモバイル開発を始めるも挫折。 <br></br>
        2020年からReactNative,Flutterのモバイルアプリ開発を始めると同時に React、Vue、Laravel、Nodejsにも 興味を持ち開発を始める。
        2025年3月に介護福祉関係の会社を退職し、 現在、個人開発で社会で本当に役にたつWebサービス作りに取り組んでいます。
      </div>
      <Link href="/">
      <div className="text-center text-orange-700 mt-3">戻る</div>
      </Link>
    </div>
  )
}
