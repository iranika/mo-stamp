<template>
 <v-container
    width="100%"
    class="pa-5"
  >
    <v-card width="95%" class="ma-auto">
      <v-card-title></v-card-title>
      <v-card flat>
        <v-card-title>Nikaスタンプの使い方</v-card-title>
        <v-container>
          <a href="https://twitter.com/happy_packet/status/1415317339264802816?s=20">わかりやすい解説ツイートはこちら</a><br><br>
          <p>Twitter for web等はクリップボードから画像の貼り付けに対応しています。</p>
          <p>Nikaスタンプから画像をクリップボードにコピーし、Twitter等に貼り付けすることで便利にスタンプを使えます。</p>
          <p>PCの人はこのサイトをブックマークバー等に登録しておくことで、すぐに開いて便利に使えます。</p>
          <p>試験的にPC用のブックマークレットも作りました</p>
          <p>このリンクをブックマークバーにドラッグ&ドロップしてお使いください↓</p>
          <p><a href='javascript:(function(e){window.open("https://stamp.iranika.info/#/",null,"width=520,height=500");})(encodeURIComponent);'>Nikaスタンプ</a></p>
          <p>ドラッグアンドドロップできないブラウザは、以下のURLをブックマークバーに登録してください。</p>
          <pre style="overflow: auto;">javascript:(function(e){window.open("https://stamp.iranika.info/#/",null,"width=520,height=500");})(encodeURIComponent);</pre>
        </v-container>
      </v-card>
      <v-card flat>
        <v-card-title>注記</v-card-title>
        <v-container>
          <p>Twitter for android等のアプリはクリップボードからの貼り付けに非対応です。</p>
          <p>スマホで使いたい場合は、Twitter for webを使ってください。（PWAとしてインストールできます）</p>
        </v-container>
      </v-card>

      <v-card flat>
        <v-card-title>今後の予定</v-card-title>
        <v-container>
          <p>・グルーピングや検索機能で探しやすくする</p>
          <p>・マイページ機能の追加</p>
          <p>・お気に入り機能でよく使うスタンプへのアクセス向上</p>
          <p>・雑なUIの整理</p>          
        </v-container>
      </v-card>

    </v-card>
 </v-container>
</template>

<script>
export default {

}
</script>

<style>
.container p {
  text-indent: 1em;
  margin-bottom: 0px;
}
</style>
