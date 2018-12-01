class DataApi {
  constructor(rawData){
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
  }
  mapIntoObject(arr){
    return arr.reduce((accu, curr)=>{
      accu[curr.id] = curr;
      return accu;
  
    }, {});
  }
  getState(){
    return {
      articles: this.data.articles,
      authors: this.data.authors
    };
  }
  lookupAuthor(authorId){
    return this.data.authors[authorId];
  }
  
}
  
export default DataApi;