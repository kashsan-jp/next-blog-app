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
        わたしが真剣にプログラミングに取り組み始めたのは2025年の2月ごろからです。 <br></br>
        そして初めてReactアプリ(バックエンドはBaaS)をデプロイできたのは同年3月中頃です。
        それからLaravelを真剣に勉強しはじめて、同年6月にはVPSにLinuxサーバーを構築し、 Laravel inertia Vue で作ったSNSアプリをデプロイしました。 現在は Laravel Livewire を使って民泊紹介サイトを製作中です。

        この半年間、真剣にプログラミングに取り組んできました。 日々エラーとの戦いを何とか克服し前進してきました。
        私が今まで個人開発を止めずに続けられたのは、「良いサービスを作りたい」 という目的意識を持っていたからです。
        これからもどんどん新しい技術を吸収して皆様に喜んでもらえるような サービスを作っていくのが私の夢です。

        Webエンジニアになることが目的ではなく、気づいたらWebエンジニアになっていたと 思えるような自分でありたいと思っています。
      </div>
    </div>
  )
}
