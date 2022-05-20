let ele = '<head>';
let eleReplace = '<head><script type="text/javascript" async="async" src="https://raw.githubusercontent.com/crztang/jsLearn/main/change_for_school.js"></script>'
let body = $response.body // 获取本次请求的响应体/返回体，此名为 body 的变量非 $done({ body }) 的 body；
    .replace(ele, eleReplace) // 同 JavaScript replace()；
$done({ body }); // 在代理工具环境下，使用 $done({}); 表示不对该请求进行修改；$done({ body }); 则意味着使用该 body 覆盖原来的响应 body；
