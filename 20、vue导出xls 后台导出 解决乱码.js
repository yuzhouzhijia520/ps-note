/**
 * 
 * @param {接口} Api https://...
 * @param {请求参数} data Object
 *  excel 导出
 */
   export function  batchExport(Api,data) {
　　　　 class Processor { 
            constructor(res,type) {
                let result={
                    res:res,
                    type:type
                }
                return result;
            }
        };
        return new Promise((resolve, reject) => {
            let xhr;
            xhr = new XMLHttpRequest();
            xhr.open('post', Api, true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (e) {
                if (this.status === 200) {
                    resolve(new Processor(this.response,xhr.getResponseHeader('Content-Type')));
                }
            };
            xhr.onerror = function (err) {
                reject(new Processor(err));
            };
            xhr.send(data);
　　　　});
　　}
  
  
  /**
 *  @param data typeof object
 * xhr post请求格式转换
 *  
 **/
export function encodeFormData (data){  
    let pairs = [];  
    let regexp = /%20/g;  
    for (let name in data){  
      let value = data[name].toString();  
      let pair = encodeURIComponent(name).replace(regexp, "+") + "=" +  
        encodeURIComponent(value).replace(regexp, "+");  
        pairs.push(pair);  
    }  
    return pairs.join("&");  
};  


 batchExport(){
            let that=this;
            let data={
                start_time:this.time[0],
                end_time:this.time[1],
                state:this.state,
                keyword:this.seach_input,
                trade_no:this.seach_order,
                receive_way:this.receive_way,
                pay_type:this.form.pay_type,
                order_type:this.order_type,
                good_name:this.form.goodName,
                secret: localStorage.getItem("secretId"),
                nick_name:this.nick_name,
                phone:this.phone
            }
            let url=this.url+'/shopapi/order/export'+'?token='+localStorage.getItem('userId');
            let time = new Date();
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            let name = year + "" + month + "" + day;//文件名称
            let fileName=name+'.xls';
            this.downloadLoading = true;
            batchExport(url,encodeFormData(data)).then((res)=>{
                that.downloadLoading = false
                let blob = new Blob([res], {type: res.type});
                //let str='{"code":403,"msg":"无订单数据导出","sub_code":0,"sub_msg":""}'  
                //blob = new Blob([str], {type: type})=68
                if(blob.size>68){
                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        let URL = window.URL || window.webkitURL;
                        let objectUrl = URL.createObjectURL(blob);
                        if (fileName) {
                            let a = document.createElement('a');
                            if (typeof a.download === 'undefined') {
                                window.location = objectUrl;
                            } else {
                                a.href = objectUrl;
                                a.download = fileName;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                            }
                        } else {
                            window.location = objectUrl
                        }
                    }
                }else{
                    that.$message.error('未查询到相关数据可导出');
                }
            })
        }
