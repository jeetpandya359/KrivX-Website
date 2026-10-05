document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================
    // AUTOMATIC LINES TYPEWRITER CONFIGURATION
    // ====================================
    const typewriterPhrases = [
        "Kriv X helps investors grow through",
        "smart investing, mutual funds,",
        "SIP planning, IPO guidance,",
        "insurance solutions, algo trading,",
        "professional market research."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 60;   
    const erasureSpeed = 30;  
    const delayBetweenPhrases = 2200; 
    const textTargetContainer = document.getElementById('typewriter-text');

    function executionTypingCycle() {
        if (!textTargetContainer) return;
        const currentCompleteLine = typewriterPhrases[phraseIndex];

        if (isDeleting) {
            characterIndex--;
            textTargetContainer.textContent = currentCompleteLine.substring(0, characterIndex);
        } else {
            characterIndex++;
            textTargetContainer.textContent = currentCompleteLine.substring(0, characterIndex);
        }

        if (!isDeleting && characterIndex === currentCompleteLine.length) {
            setTimeout(() => isDeleting = true, delayBetweenPhrases);
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        }

        const computedNextIntervalSpeed = isDeleting ? erasureSpeed : typingSpeed;
        setTimeout(executionTypingCycle, (characterIndex === currentCompleteLine.length && !isDeleting) ? delayBetweenPhrases : computedNextIntervalSpeed);
    }

    if (textTargetContainer) {
        executionTypingCycle();
    }

    // ====================================
    // RADIAL MATHEMATICS ECOSYSTEM ORBIT ENGINE
    // ====================================
    function arrangeNodesInCircularOrbit() {
        if (window.innerWidth > 992) {
            const radialElementsList = document.querySelectorAll('.radial-feature-node');
            const totalNodesCounter = radialElementsList.length;
            const orbitTrackRadius = 420; 
            
            radialElementsList.forEach((node, idx) => {
                const nodeAngleRadian = (idx * (2 * Math.PI / totalNodesCounter)) - (Math.PI / 2);
                
                const componentCoordinateX = Math.round(orbitTrackRadius * Math.cos(nodeAngleRadian));
                const componentCoordinateY = Math.round(orbitTrackRadius * Math.sin(nodeAngleRadian));
                
                node.style.left = `calc(50% + ${componentCoordinateX}px)`;
                node.style.top = `calc(50% + ${componentCoordinateY}px)`;
                node.style.position = 'absolute';
            });
        } else {
            document.querySelectorAll('.radial-feature-node').forEach(node => {
                node.style.left = '';
                node.style.top = '';
                node.style.position = '';
            });
        }
    }

    arrangeNodesInCircularOrbit();
    window.addEventListener('resize', arrangeNodesInCircularOrbit);

    // Automation loop parameters to cycle tooltips sequentially
    let activeNodeCycleIndex = 0;
    const radialNodesArray = document.querySelectorAll('.radial-feature-node');
    
    function automaticOrbitRadarCycle() {
        if (window.innerWidth > 992 && radialNodesArray.length > 0) {
            radialNodesArray.forEach(node => node.classList.remove('active-radar-node'));
            radialNodesArray[activeNodeCycleIndex].classList.add('active-radar-node');
            activeNodeCycleIndex = (activeNodeCycleIndex + 1) % radialNodesArray.length;
        }
    }
    
    let radarAutomationInterval = setInterval(automaticOrbitRadarCycle, 3000);

    // Pause automation on cursor hovers
    radialNodesArray.forEach(node => {
        node.addEventListener('mouseenter', () => {
            clearInterval(radarAutomationInterval);
            radialNodesArray.forEach(n => n.classList.remove('active-radar-node'));
        });
        node.addEventListener('mouseleave', () => {
            radarAutomationInterval = setInterval(automaticOrbitRadarCycle, 3000);
        });
    });

    // ====================================
    // NAVIGATION WITH OFFSET SMOOTH-SCROLL SCROLLER
    // ====================================
    const headerLinks = document.querySelectorAll('.nav-links a');
    const navbarElement = document.querySelector('.navbar');
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    headerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                e.preventDefault();
                const navbarHeightOffset = navbarElement ? navbarElement.clientHeight : 90;
                const sectionTargetPosition = targetSection.offsetTop - navbarHeightOffset;

                window.scrollTo({
                    top: sectionTargetPosition,
                    behavior: 'smooth'
                });

                if (navLinksContainer && navLinksContainer.classList.contains('active-drawer')) {
                    navLinksContainer.classList.remove('active-drawer');
                    navLinksContainer.style.display = 'none';
                    if (mobileToggleBtn) mobileToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // ====================================
    // RESPONSIVE USER INTERFACE INTERACTION HANDLERS
    // ====================================
    if (mobileToggleBtn && navLinksContainer) {
        mobileToggleBtn.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active-drawer')) {
                navLinksContainer.classList.remove('active-drawer');
                navLinksContainer.style.display = 'none';
                mobileToggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navLinksContainer.classList.add('active-drawer');
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '100%';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.width = '100%';
                navLinksContainer.style.background = '#050816';
                navLinksContainer.style.padding = '20px';
                navLinksContainer.style.gap = '20px';
                navLinksContainer.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
                mobileToggleBtn.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
    }

    // ====================================
    // SCROLL INTERSECTION REVEAL ENGINE
    // ====================================
    const revealTargetSections = document.querySelectorAll('.section-reveal');

    const revealObserverOptions = {
        root: null,
        threshold: 0.10,
        rootMargin: "0px"
    };

    const sectionRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-view');
                observer.unobserve(entry.target); 
            }
        });
    }, revealObserverOptions);

    revealTargetSections.forEach(section => {
        sectionRevealObserver.observe(section);
    });

    // ====================================
    // ADVANCED 3D MATRIX CARD INTERACTION ENGINE
    // ====================================
    const matrixCards = document.querySelectorAll('.tilt-card');

    matrixCards.forEach(card => {
        const glowOverlay = card.querySelector('.card-glow');

        card.addEventListener('mousemove', (e) => {
            const boundaryRect = card.getBoundingClientRect();
            const pointerX = e.clientX - boundaryRect.left;
            const pointerY = e.clientY - boundaryRect.top;
            
            if (glowOverlay) {
                glowOverlay.style.opacity = '1';
                glowOverlay.style.left = `${pointerX}px`;
                glowOverlay.style.top = `${pointerY}px`;
            }

            const cardWidth = boundaryRect.width;
            const cardHeight = boundaryRect.height;
            const centerVectorX = pointerX - (cardWidth / 2);
            const centerVectorY = pointerY - (cardHeight / 2);
            
            const tiltAngleX = -(centerVectorY / (cardHeight / 2)) * 8;
            const tiltAngleY = (centerVectorX / (cardWidth / 2)) * 8;

            card.style.transform = `rotateX(${tiltAngleX}deg) rotateY(${tiltAngleY}deg) scale3d(1.01, 1.01, 1.01)`;
        });

        card.addEventListener('mouseleave', () => {
            if (glowOverlay) {
                glowOverlay.style.opacity = '0';
            }
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ====================================
    // PRODUCT INFINITE SLIDER AUTOMATION ENGINE
    // ====================================
    const horizontalSliderTrack = document.getElementById('products-track');
    const runningSliderWindow = document.querySelector('.slider-window');
    
    if (horizontalSliderTrack && runningSliderWindow) {
        const sourceProductCards = Array.from(horizontalSliderTrack.children);
        sourceProductCards.forEach(card => {
            const replicatedClone = card.cloneNode(true);
            horizontalSliderTrack.appendChild(replicatedClone);
        });

        let currentScrollOffsetPosition = 0;
        const uniformScrollingVelocitySpeed = 1.0; 

        function processCarouselTrackingTick() {
            currentScrollOffsetPosition += uniformScrollingVelocitySpeed;
            const maximumLoopThresholdBounds = horizontalSliderTrack.scrollWidth / 2;
            
            if (currentScrollOffsetPosition >= maximumLoopThresholdBounds) {
                currentScrollOffsetPosition = 0; 
            }
            
            horizontalSliderTrack.style.transform = `translateX(${-currentScrollOffsetPosition}px)`;
            
            const screenMiddlePivotX = window.innerWidth / 2;
            const updatedActiveCardsList = horizontalSliderTrack.querySelectorAll('.product-card');
            
            updatedActiveCardsList.forEach(card => {
                const layoutDimensions = card.getBoundingClientRect();
                const cardCenterPivotX = layoutDimensions.left + (layoutDimensions.width / 2);
                
                if (Math.abs(cardCenterPivotX - screenMiddlePivotX) < 170) {
                    card.classList.add('center-focus-item');
                } else {
                    card.classList.remove('center-focus-item');
                }
            });
            
            requestAnimationFrame(processCarouselTrackingTick);
        }

        requestAnimationFrame(processCarouselTrackingTick);
    }

    // =========================================================
    // HOVER-DEPENDENT BOUNDING INTERACTIVE REVEAL MOTOR
    // =========================================================
    const revealTitleHeader = document.getElementById('interactive-reveal-heading');
    const backgroundTorchLight = document.getElementById('torch-light-source');
    const revealParentSection = document.querySelector('.krivx-text-reveal-section');

    if (revealTitleHeader && revealParentSection) {
        
        revealParentSection.addEventListener('mousemove', (event) => {
            const sectionalDimensions = revealParentSection.getBoundingClientRect();
            
            const cursorRelativeX = event.clientX - sectionalDimensions.left;
            const cursorRelativeY = event.clientY - sectionalDimensions.top;

            if (backgroundTorchLight) {
                backgroundTorchLight.style.opacity = '1';
                backgroundTorchLight.style.left = `${cursorRelativeX}px`;
                backgroundTorchLight.style.top = `${cursorRelativeY}px`;
            }

            const titleElementDimensions = revealTitleHeader.getBoundingClientRect();
            const headingPercentageX = ((event.clientX - titleElementDimensions.left) / titleElementDimensions.width) * 100;
            const headingPercentageY = ((event.clientY - titleElementDimensions.top) / titleElementDimensions.height) * 100;

            revealTitleHeader.style.setProperty('--mouse-target-x', `${headingPercentageX}%`);
            revealTitleHeader.style.setProperty('--mouse-target-y', `${headingPercentageY}%`);
        });

        revealParentSection.addEventListener('mouseleave', () => {
            if (backgroundTorchLight) {
                backgroundTorchLight.style.opacity = '0';
            }
            revealTitleHeader.style.setProperty('--mouse-target-x', '-500px');
            revealTitleHeader.style.setProperty('--mouse-target-y', '-500px');
        });
    }

    // =========================================================
    // DYNAMIC SINGLE PAGE LINK OBSERVER
    // =========================================================
    const trackingViewSections = document.querySelectorAll('section, footer');
    const systemNavigationLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let activeSectionId = '';
        
        trackingViewSections.forEach(section => {
            const sectionOffsetTop = section.offsetTop;
            
            if (pageYOffset >= (sectionOffsetTop - 240)) {
                if (section.getAttribute('id')) {
                    activeSectionId = section.getAttribute('id');
                } else if (section.classList.contains('footer-section')) {
                    activeSectionId = 'contact'; 
                }
            }
        });

        systemNavigationLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(activeSectionId)) {
                link.classList.add('active');
            }
        });
    });
});