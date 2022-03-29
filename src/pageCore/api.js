import request from "umi-request";
const HOST = "" // 
const testData = {
    type:1,
    userName:"Amy",
    userDesc:"love life every day",
    list:[
    
    ],
}
const action = function(act,data ={ method:'post' ,data:testData }) {
  var headers = {
    "Content-Type":"application/json" //  "multipart/form-data"
  }
  data.data = testData;
  if (data.method === 'get'){
    return request.get(HOST + act,  { headers,params: data.data })
  }else{
    return request.post(HOST + act, { headers,data: data.data  })
  } 
};
export default action;

//  .then(function(response) { console.log(response); }) .catch(function(error) { console.log(error); });
