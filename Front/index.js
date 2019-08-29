$(document).ready(() => {
    // console.log("Hi there")
    let body = $("body");
    $.get("http://localhost:4000", (data) => {
        console.log(data);
        data.forEach(job => {
            let template = `<div class="singlejob">
                <h4>Title: ${job.title}</h4>
                <p>Summary: ${job.summary}</p>
                <p>Location: ${job.location}</p>
                <a href="${job.url}" target="_blank"> See more</a>
            </div>`

            body.append(template);
        });
    })
})