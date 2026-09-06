function bootstrapApplication() {
    if (typeof masterCollectionRegistry === 'undefined') return;
    const config = siteConfiguration;

    document.getElementById('site-logo').textContent = config.logoTitle || '';
    document.getElementById('tracklist-toggle').textContent = config.sectionLabels.deckMatrixShow || '';

    const navContainer = document.getElementById('nav-filters');
    navContainer.innerHTML = '';

    config.navigationMenu.forEach((menuItem, idx) => {
        const btn = document.createElement('button');
        btn.textContent = menuItem.label;
        if (idx === 0) btn.className = 'active'; 
        btn.onclick = function() { switchCategory(menuItem.id, this); };
        navContainer.appendChild(btn);
    });

    loadPageView(config.navigationMenu[0].id);
    
    document.getElementById('player-wrapper').classList.remove('expanded');
}

function loadPageView(pageKey) {
    const pageMap = pageLayoutEngine[pageKey];
    if (!pageMap) return;

    let layoutHtml = '';

// 1. RENDER MAIN HERO BANNER
    layoutHtml += `
        <div class="full-banner banner-70">
            <img src="./img_bg/${pageMap.titleBanner.imageName || ''}" class="banner-img">
            <div class="banner-heading">
                <h1>${pageMap.titleBanner.title || ''}</h1>
            </div>
        </div>
    `;

    // 2. INJECT SOCIAL MATRIX (Now positioned immediately after the banner)
    if (pageKey === siteConfiguration.navigationMenu[0].id) {
        layoutHtml += `
            <div class="social-matrix-wrapper">
                <div class="social-matrix">
                    <a href="https://www.tiktok.com/@p1exp" target="_blank" class="social-icon" title="TikTok">
                        <svg viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/p1exp" target="_blank" class="social-icon" title="Instagram">
                        <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/p1exp" target="_blank" class="social-icon" title="Facebook">
                        <svg viewBox="0 0 320 512"><path d="M279.1 288l14.2-92.7h-88.7V135.3c0-25.4 12.4-50.1 52.2-50.1h40.4V11.5S260.6 0 225.4 0C148.6 0 98 46.8 98 130.6V195.3H14v92.7h84v224h100.5v-224h80.6z"/></svg>
                    </a>
                    <a href="https://www.youtube.com/@p1exp" target="_blank" class="social-icon" title="YouTube">
                        <svg viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </a>
                </div>
            </div>
        `;
    }

    // 3. RENDER THE BANNER TEXT BLOCK
    layoutHtml += `
        <div class="narrow-text-block">
            ${pageMap.titleBanner.text || ''}
        </div>
    `;

    // 4. RENDER ALL SUB-SECTIONS (BANNERS, HTML TEXT, GRID)
    if (pageMap.sections && pageMap.sections.length > 0) {
        pageMap.sections.forEach(section => {
            
            // A: Only inject a section banner if an imageName exists
            if (section.imageName) {
                layoutHtml += `
                    <div class="full-banner banner-60">
                        <img src="./img_bg/${section.imageName}" class="banner-img">
                        <div class="banner-heading">
                            <h2>${section.title || ''}</h2>
                        </div>
                    </div>
                `;
            }

            // B: Inject the raw text block (no forced <p> tags)
            if (section.text) {
                layoutHtml += `
                    <div class="narrow-text-block">
                        ${section.text}
                    </div>
                `;
            }

            // C: Only build the project grid if there are archive items
            if (section.archiveKeys && section.archiveKeys.length > 0) {
                layoutHtml += `<div class="collection-grid">`;
                section.archiveKeys.forEach(catNo => {
                    const item = masterCollectionRegistry[catNo];
                    if (!item) return;

                    layoutHtml += `
                        <div class="project-layout-card">
                            <img src="./img_coll/${catNo}.jpg" class="card-thumbnail">
                            <div class="card-details">
                                <h3>${item.title || ''}</h3>
                                <span class="meta-tag">P1-${catNo} // ${item.date || ''}</span>
                                <div class="card-desc-block">${item.description || ''}</div>
                                ${item.mediaUrl ? `<button class="route-link" onclick="routeToDeck('${item.mediaUrl}')">▶ PLAY ARCHIVE DECK</button>` : ''}
                                ${item.footer ? `<div class="card-footer-text">${item.footer}</div>` : ''}
                            </div>
                        </div>
                    `;
                });
                layoutHtml += `</div>`; 
            }
        });
    }

    const navMenu = siteConfiguration.navigationMenu;
    const currentIndex = navMenu.findIndex(item => item.id === pageKey);
    
    if (currentIndex !== -1 && currentIndex < navMenu.length - 1) {
        const nextItem = navMenu[currentIndex + 1];
        layoutHtml += `
            <div class="next-page-wrapper">
                <button class="next-page-btn" onclick="triggerNavigation('${nextItem.id}')">
                    NEXT AREA: ${nextItem.label} &#10142;
                </button>
            </div>
        `;
    }

    // --- INJECT DYNAMIC COPYRIGHT ---
    const currentYear = new Date().getFullYear();
    layoutHtml += `
        <div class="copyright-text">
            &copy; ${currentYear} Platform-1 Experimental - All rights reserved
        </div>
    `;

    const mainPanel = document.getElementById('main-scroll-panel');
    mainPanel.classList.add('fade-out');
    
    setTimeout(() => {
        mainPanel.innerHTML = layoutHtml;
        mainPanel.scrollTop = 0;
        mainPanel.classList.remove('fade-out');
    }, 300); 
}

function triggerNavigation(targetPageKey) {
    const navMenu = siteConfiguration.navigationMenu;
    const targetIndex = navMenu.findIndex(item => item.id === targetPageKey);
    
    if (targetIndex !== -1) {
        const navButtons = document.querySelectorAll('#nav-filters button');
        if (navButtons[targetIndex]) {
            switchCategory(targetPageKey, navButtons[targetIndex]);
        }
    }
}

function routeToDeck(targetUrl) {
    const deckFrame = document.getElementById('master-deck-frame');
    const wrapper = document.getElementById('player-wrapper');
    const preloader = document.getElementById('deck-preloader');
    const idleScreen = document.getElementById('deck-idle');
    const toggleContainer = document.getElementById('toggle-container');
    
    if (idleScreen) {
        idleScreen.classList.add('hidden');
    }
    
    if (toggleContainer) {
        toggleContainer.classList.remove('hidden');
    }

    preloader.classList.remove('hidden');
    deckFrame.src = 'about:blank'; 

    if (targetUrl.includes('bandcamp.com')) {
        wrapper.setAttribute('data-platform', 'bandcamp');
    } else if (targetUrl.includes('youtube.com')) {
        wrapper.setAttribute('data-platform', 'youtube');
    } else if (targetUrl.includes('mixcloud.com')) {
        wrapper.setAttribute('data-platform', 'mixcloud');
    } else if (targetUrl.includes('hearthis.at')) {
        wrapper.setAttribute('data-platform', 'hearthis');
    } else {
        wrapper.setAttribute('data-platform', 'generic');
    }

    wrapper.classList.add('expanded');
    document.getElementById('tracklist-toggle').innerHTML = siteConfiguration.sectionLabels.deckMatrixHide;
    deckFrame.src = targetUrl;

    deckFrame.onload = function() {
        if (deckFrame.src !== 'about:blank' && deckFrame.src !== window.location.href) {
            preloader.classList.add('hidden');
        }
    };
}

function switchCategory(categoryKey, buttonElement) {
    document.querySelectorAll('#nav-filters button').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    loadPageView(categoryKey);
}

function toggleTracklist() {
    const wrapper = document.getElementById('player-wrapper');
    const button = document.getElementById('tracklist-toggle');
    const labels = siteConfiguration.sectionLabels;

    wrapper.classList.toggle('expanded');
    button.innerHTML = wrapper.classList.contains('expanded') ? labels.deckMatrixHide : labels.deckMatrixShow;
}

// --- MOBILE SWIPE NAVIGATION ENGINE ---
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const mainScrollPanel = document.getElementById('main-scroll-panel');

mainScrollPanel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true }); 

mainScrollPanel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
}, { passive: true });

function handleSwipeGesture() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const swipeThreshold = 50; 

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
        const navButtons = Array.from(document.querySelectorAll('#nav-filters button'));
        const activeBtn = document.querySelector('#nav-filters button.active');
        const currentIndex = navButtons.indexOf(activeBtn);
        const navMenu = siteConfiguration.navigationMenu;

        if (deltaX < 0 && currentIndex < navMenu.length - 1) {
            triggerNavigation(navMenu[currentIndex + 1].id);
        } else if (deltaX > 0 && currentIndex > 0) {
            triggerNavigation(navMenu[currentIndex - 1].id);
        }
    }
}

bootstrapApplication();
