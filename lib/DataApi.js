class DataApi {
  constructor(rawData){
    this.rawData = rawData;
  }
  mapIntoObject(arr){
    return arr.reduce((accu, curr)=>{
      accu[curr.id] = curr;
      return accu;

    }, {});
  }
  getArticles(){
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors(){
    return this.mapIntoObject(this.rawData.authors);

  }

}

export default DataApi;