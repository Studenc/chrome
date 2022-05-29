let jobs = document.getElementsByClassName("job-item");

for (let job of jobs) {
	let row = job.getElementsByClassName("row")[1].getElementsByClassName("align-items-end")[0];
	let link = job.getElementsByClassName("collapse")[0].getElementsByClassName("job-detail")[0].getElementsByClassName("justify-content-between")[0].getElementsByClassName("col")[0].childNodes[1].childNodes[5].getAttribute("href");

	console.log(link);

	let div = document.createElement("div");
	div.innerHTML =
		`
        <a target="_blank" href=" ` +
		link +
		`"
            <button style="margin-left: 20px" class="btn btn-warning btn-sm" type="button" aria-expanded="false">Redirekt</button>
        </a>
    `;

	row.appendChild(div);
}
