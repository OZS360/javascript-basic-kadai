const Btn = document.getElementById('btn');
const h2 = document.getElementById('text');

Btn.addEventListener('click', () => {
  // li要素を新しく作成する
   // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
   setTimeout(() => {
	　 h2.textContent = 'ボタンをクリックしました。';
   }, 2000);
});