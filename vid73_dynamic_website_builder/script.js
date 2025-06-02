function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Helper to format views
    function formatViews(num) {
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
        return num;
    }

    // Main card container
    const card = document.createElement('div');
    card.style.display = 'flex';
    card.style.backgroundColor = '#0f0f0f';
    card.style.color = 'white';
    card.style.width = '600px';
    card.style.borderRadius = '10px';
    card.style.overflow = 'hidden';
    card.style.fontFamily = 'Arial, sans-serif';
    card.style.margin = '100px';

    // Thumbnail container
    const thumbContainer = document.createElement('div');
    thumbContainer.style.position = 'relative';
    thumbContainer.style.flexShrink = '0';

    const thumb = document.createElement('img');
    thumb.src = thumbnail;
    thumb.style.width = '168px';
    thumb.style.height = '94px';
    thumb.style.objectFit = 'cover';
    thumb.style.borderRadius = '10px 0 0 10px';

    const timeTag = document.createElement('span');
    timeTag.innerText = duration;
    timeTag.style.position = 'absolute';
    timeTag.style.bottom = '8px';
    timeTag.style.right = '4px';
    timeTag.style.backgroundColor = 'black';
    timeTag.style.padding = '1px 4px';
    timeTag.style.fontSize = '12px';
    timeTag.style.borderRadius = '3px';

    thumbContainer.appendChild(thumb);
    thumbContainer.appendChild(timeTag);

    // Info container
    const info = document.createElement('div');
    info.style.padding = '6px';

    const titleElem = document.createElement('div');
    titleElem.innerText = title;
    titleElem.style.fontSize = '14px';
    titleElem.style.fontWeight = 'bold';
    titleElem.style.marginBottom = '6px';

    const metaElem = document.createElement('div');
    metaElem.innerText = `${cName} • ${formatViews(views)} views • ${monthsOld} months ago`;
    metaElem.style.fontSize = '12px';
    metaElem.style.color = '#aaa';

    info.appendChild(titleElem);
    info.appendChild(metaElem);

    // Assemble card
    card.appendChild(thumbContainer);
    card.appendChild(info);

    // Append to document body or any container
    document.body.appendChild(card);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")