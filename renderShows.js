function renderShow(show = {}) {
	return `<div class="show">
                        <h3>${show.show.name} </h3>
                        <a href="${show.show.url}">
                        <img src="${show.show.image.medium}" alt=""></a>
                        <div class="item-footer">
                            <div class="heart"><span class="icon-heart"></span></div>
                            <div class="rate"><span class="icon-star-full"></span>${show.show.rating.average}</div>
                        </div>
                    </div>`
}

export function renderShows(shows = []) {
	document.querySelector('.shows').innerHTML = shows.map(renderShow).join("")
}
