export default class Content{
  static contentJson = {};

  constructor(contentName){
      this.contentName = contentName;
  };
  // 非表示にする
  hideDisplay(){
      let targetNode = document.getElementById('content-group');
      targetNode.classList.add('d-none');
      targetNode.classList.remove('d-block');
  };

  appearDisplay(){
      let targetNode = document.getElementById(this.contentName);
      targetNode.classList.add('d-block');
      targetNode.classList.remove('d-none');
  };
}