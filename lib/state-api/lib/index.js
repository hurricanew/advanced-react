import { setInterval } from 'timers';

let vm;

class DataApi {
  constructor(rawData){
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    vm = this;
   
  }
  mapIntoObject(arr){
    return arr.reduce((accu, curr)=>{
      accu[curr.id] = curr;
      return accu;
  
    }, {});
  }
  getState(){
    return vm.data;
  }
  lookupAuthor(authorId){
    return this.data.authors[authorId];
  }
  mergeWithState(newState){
    this.data = {
      ...this.data,
      ...newState
    };
    this.notifiySubscribers();
  }
  setSearchTerm(searchTerm){
    this.mergeWithState({searchTerm});
  }
  subscribe(cb){
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId]=cb;
    return this.lastSubscriptionId;
  }
  unsubscribe(subscriptionId){
    delete this.subscriptions[subscriptionId];
      
  }
  notifiySubscribers(){
    Object.values(this.subscriptions).forEach((cb)=>cb());
  }
  startClock(){
    setInterval(()=>{
      vm.mergeWithState({
        timestamp: new Date()
      });
    },1000);    
  }
}
  
export default DataApi;