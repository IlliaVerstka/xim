let slideUp = (target, duration = 400) => {
   if (!target.classList.contains('-anim')) {
      target.classList.add('-anim');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('-anim');
      }, duration)
   }
}
let slideDown = (target, duration = 400) => {
   if (!target.classList.contains('-anim')) {
      target.classList.add('-anim');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('-anim');
      }, duration)
   }
}
let slideToggle = (target, duration = 400) => {
   if (target.hidden) {
      return slideDown(target, duration);
   } else {
      return slideUp(target, duration);
   }
}
let showTabContent = (content, animation, disableAnim, nullDuration) => {
	if (disableAnim) {
		content.style.display = 'block'
	} else {
		setTimeout(() => {
			content.classList.add('-animTab')
			content.style.cssText = `display:block; animation: ${animation.name} ${animation.duration}ms forwards 0s;`
			setTimeout(() => {
				content.style.animation = ""
				content.classList.remove('-animTab')
			}, animation.duration);
		}, nullDuration ? animation.duration : 0);
	}
}
let hideTabContent = (content, animation, disableAnim) => {
	if (disableAnim) {
		content.style.display = 'none'
	} else {
		content.style.cssText = `animation: ${animation.name} ${animation.duration}ms forwards 0s;`
		content.classList.add('-animTab')
		setTimeout(() => {
			content.style.display = 'none'
			content.style.animation = ""
			content.classList.remove('-animTab')
		}, animation.duration);
	}
}

let changeTab = (activeItem, contents, animation, oldActiveContent, state, noActive) => {
	// add -active content
	let activeContent;

	if (activeItem) {
		const idActiveItem = activeItem.dataset.tabItem
		activeContent = contents.filter(content => content.dataset.tabContent == idActiveItem)[0]
		activeContent.classList.add('-active')
	}
	// init video
	if (state == 'change') {
		// скидання табів при переході на інший розділ
		if (oldActiveContent && oldActiveContent.classList.contains('main-content')) {
			const items = oldActiveContent.querySelectorAll('[data-tab-item]')
			// видалення класу active
			items.forEach(item => item.classList.remove('-active'))
			items[0].classList.add('-active')

			const activeContent = oldActiveContent.querySelector('[data-tab-content].-active')
			const content = oldActiveContent.querySelector('[data-tab-content]')
			// перемикання контентів на 1 позицію
			hideTabContent(activeContent, false, true)
			activeContent.classList.remove('-active')
			showTabContent(content, false, true)
			content.classList.add('-active')

			// приховування вікритих спойлерів
			const openSpoller = oldActiveContent.querySelectorAll('[data-spoller-item].-active')
			if (openSpoller.length > 0) {
				openSpoller.forEach(spoller => setTimeout(() => spoller.click(), 500))
			}
		}

		// ініціалізаці активного відео
		initElements('video', activeContent)

		// показати/приховати перемикач слайдів
		const visiblePopup = document.querySelector('.popup-reaction_switch.-visible')
		if (visiblePopup) {
			visiblePopup.classList.remove('-visible')
		}

		// ініціалізація слайдера
		const sliderEl = activeContent.querySelector('[data-tab-content]') ? activeContent.querySelector('[data-tab-content]') : activeContent
		if (sliderEl.querySelector('.slider-main-content__body')) {
			initElements('slider', sliderEl.querySelector('.slider-main-content__body'))

			const popupSwitch = document.querySelector('.main-content.-active').querySelector('.popup-reaction_switch')
			if (!popupSwitch.classList.contains('-visible')) {
				popupSwitch.classList.add('-visible')
			}
		} else {
			initElements('removeSlider')
		}

		// відкрити перший спойлер, якщо він є
		const firstSpollerItem = activeContent.querySelector('.main-content__list li:first-child [data-spoller-item]')
		if (firstSpollerItem && !firstSpollerItem.classList.contains('-active') && oldActiveContent && !document.body.classList.contains('-animGoTo')) {
			firstSpollerItem.click()
		}



		// отримання першого активного елемента
		let activeFirstElement
		if (activeContent.querySelector('[data-tab-content]')) {
			activeFirstElement = activeContent.querySelector('[data-tab-content]')
		} else if (activeContent.querySelector('.swiper-slide')) {
			activeFirstElement = activeContent.querySelector('.swiper-slide')
		} else {
			activeFirstElement = activeContent
		}

		const popupInfoEl = activeFirstElement.closest('.main-content').querySelector('.popup-reaction_info')
		showPopupInfo(activeFirstElement, popupInfoEl)
	}

	if (oldActiveContent || state == 'change') {
		showTabContent(activeContent, animation.show, false, oldActiveContent ? true : false)
		if (oldActiveContent) {
			hideTabContent(oldActiveContent, animation.hide)
			oldActiveContent.classList.remove('-active')
		}
	}

	if (state == 'on') {
		if (!noActive) {
			showTabContent(activeContent, "", true)
			contents.filter(content => !content.classList.contains('-active')).forEach(content => hideTabContent(content, "", true))
		} else {
			contents.forEach(content => hideTabContent(content, "", true))

		}
	}
	if (state == 'off') {
		contents.forEach(content => showTabContent(content, animation.show, true))
	}
}

class Tabs {
	elements = document.querySelectorAll('[data-tab]')

	init() {
		if (this.elements.length > 0) {
			this.elements.forEach(element => {
				// створення параметрів таба
				const createAnimationSetting = animationSetting => {
					const arrSetting = animationSetting.split(',').map(setting => setting.trim())

					return {
						name: arrSetting[0],
						duration: arrSetting[1],
					}
				}

				const settings = {
					el: element,
					items: Array.from(Array.from(element.children).find(el => el.hasAttribute('data-tab-items')).querySelectorAll('[data-tab-item]')),
					contents: Array.from(Array.from(element.children).find(el => el.hasAttribute('data-tab-contents')).children),
					noActive: element.hasAttribute('data-no-active'),
					animation: {
						show: createAnimationSetting(element.dataset.animationShow),
						hide: createAnimationSetting(element.dataset.animationHide)
					},
					mediaQuery: {
						type: element.dataset.tab.split(',').map(text => text.trim())[0],
						size: element.dataset.tab.split(',').map(text => text.trim())[1],
					}
				}

				element.settingTab = settings

				// media query
				const mediaList = window.matchMedia(`(${settings.mediaQuery.type}-width: ${settings.mediaQuery.size}px)`)
				this.handlerMedia(mediaList, settings.el, settings.items, settings.noActive, settings.contents, settings.animation)
				mediaList.addListener(() => this.handlerMedia(mediaList, settings.el, settings.items, settings.noActive, settings.contents, settings.animation))
			})

		}
	}
	handlerMedia(mediaList, tabElement, itemsMenu, noActive, contents, animation) {
		if (mediaList.matches) {
			// set state enable
			tabElement.setAttribute('data-tab-enable', '')
			tabElement.removeAttribute('data-tab-disabled')

			let activeItem
			if (!noActive) {
				activeItem = itemsMenu.filter(item => item.classList.contains('-active'))[0]

				if (!activeItem) {
					activeItem = itemsMenu[0]
					activeItem.classList.add('-active')
				}
			}

			changeTab(!noActive ? activeItem : false, contents, animation, false, 'on', noActive)
		} else {
			// set state disabled
			tabElement.setAttribute('data-tab-disabled', '')
			tabElement.removeAttribute('data-tab-enable')

			changeTab(false, contents, animation, false, 'off')
		}

		document.addEventListener('click', this.actionDocument)
	}
	actionDocument(e) {
		const target = e.target

		if (target.closest('[data-tab-item]') && target.closest('[data-tab]').hasAttribute('data-tab-enable')) {
			e.preventDefault()

			if (!target.closest('[data-tab-item]').classList.contains('-active') && target.closest('[data-tab]').querySelectorAll('.-animTab').length === 0) {
				const activeItem = target.closest('[data-tab-item]')

				// remove -active items
				activeItem.closest('[data-tab-items]').querySelectorAll('[data-tab-item]').forEach(item => item.classList.remove('-active'))
				// add -active item
				activeItem.classList.add('-active')

				// change content
				const tabElement = activeItem.closest('[data-tab]')
				const contents = Array.from(Array.from(tabElement.children).find(el => el.hasAttribute('data-tab-contents')).children)
				changeTab(activeItem, contents, tabElement.settingTab.animation, contents.filter(content => content.classList.contains('-active'))[0], 'change')
			}
		}
	}
}

class Spoller {
	init() {
		this.elements = document.querySelectorAll('[data-spollers]')
		this.objects = []
		if (this.elements.length > 0) {
			for (let index = 0; index < this.elements.length; index++) {
				const spoller = this.elements[index];
				const obj = {}
				obj.el = spoller
				obj.oneSpoller = obj.el.hasAttribute('data-one-spoller')
				obj.items = obj.el.querySelectorAll('[data-spoller-item]')
				const mediaSettings = obj.el.dataset.spollers.split(',').map(item => item.trim())
				obj.mediaSettings = {
					type: mediaSettings[0],
					size: mediaSettings[1],
				}
				obj.activeItems = Array.from(obj.items).filter(item => item.classList.contains('-active'))
				this.objects.push(obj)
			}
			for (let index = 0; index < this.objects.length; index++) {
				const obj = this.objects[index];
				const mediaQueryList = window.matchMedia(`(${obj.mediaSettings.type}-width:${obj.mediaSettings.size}px)`)

				this.mediaHandler(mediaQueryList, obj.el, obj.items, obj.activeItems, obj.oneSpoller)
				mediaQueryList.addEventListener('change', e => this.mediaHandler(e, obj.el, obj.items, obj.activeItems, obj.oneSpoller))
			}
		}
	}
	mediaHandler(e, spollerElement, items, activeItems, oneSpoller) {
		if (e.matches) {
			const activeItems = []
			const inactiveItems = []
			items.forEach(item => item.classList.contains('-active') ? activeItems.push(item) : inactiveItems.push(item))

			if (activeItems.length > 0) {
				if (oneSpoller) {
					if (activeItems.length > 1) {
						slideDown(items[0].nextElementSibling, 0)
						activeItems.forEach(item => {
							item.classList.remove('-active')
							slideUp(item.nextElementSibling, 0)
						})
						items[0].classList.add('-active')
					} else if (activeItems.length == 1) {
						slideDown(activeItems[0].nextElementSibling, 0)
					}
				} else {
					activeItems.forEach(item => {
						slideDown(item.nextElementSibling, 0)
					})
				}
			} else {
				if (oneSpoller) {
					items[0].classList.add('-active')
					slideDown(items[0].nextElementSibling, 0)
				}
			}
			if (inactiveItems.length > 0) {
				inactiveItems.forEach(item => {
					slideUp(item.nextElementSibling, 0)
				})
			}

			spollerElement.items = items
			spollerElement.oneSpoller = oneSpoller
			spollerElement.addEventListener('click', this.actionSpollerElement)
		} else {
			items.forEach(item => {
				item.classList.remove('-active')
				slideDown(item.nextElementSibling, 0)
			})
			if (activeItems.length > 0) {
				activeItems.forEach(item => item.classList.add('-active'))
			}

			if (spollerElement.items && spollerElement.oneSpoller) {
				delete spollerElement.items
				delete spollerElement.oneSpoller
			}
			spollerElement.removeEventListener('click', this.actionSpollerElement)
		}
	}
	actionSpollerElement(e) {
		const target = e.target;
		const items = e.currentTarget.items;
		const oneSpoller = e.currentTarget.oneSpoller;
		const animContent = Array.from(items).filter(item => item.nextElementSibling.classList.contains('-anim'))

		if (target.closest('[data-spoller-item]')) {
			const item = target.closest('[data-spoller-item]')
			if (!item.querySelector('[data-spoller-openner]') || target.closest('[data-spoller-openner]')) {
				e.preventDefault()
				if (animContent.length === 0) {
					if (item.classList.contains('-active')) {
						if (!oneSpoller) {
							item.classList.remove('-active')
							slideUp(item.nextElementSibling)
						}
					} else {
						slideDown(item.nextElementSibling)
						if (oneSpoller) {
							items.forEach(item => {
								item.classList.remove('-active')
								slideUp(item.nextElementSibling)
							})
						}
						item.classList.add('-active')
					}
				}
			}
		}
	}
}



const animMenuLabels = item => {
	const menuList = Array.from(document.querySelector('.menu__list').children)
	const labels = Array.from(document.querySelector('.menu__label').children)

	labels.forEach(label => label.classList.remove('-show'))
	if (item) {
		labels[menuList.indexOf(item.parentElement)].classList.add('-show')
	}
}
const updatePopupShare = (blockUrl, set) => {
	if (set) {
		const url = new URL('single.html', window.location.href)

		// отримання індексу розділу
		const indexActiveSection = Array.from(document.querySelectorAll('.menu__item')).findIndex(item => item.classList.contains('-active'))

		const activeMainContent = document.querySelectorAll('.main-content')[indexActiveSection]
		const activeItemContent = activeMainContent.querySelector('[data-tab-content].-active')
		// отримання індексу пункту меню
		const itemsMainContent = activeMainContent.querySelectorAll('[data-tab-item]')
		const indexItem = Array.from(itemsMainContent).findIndex(item => item.classList.contains('-active'))

		let activeSlide;
		// console.log(activeItemContent);
		if (activeItemContent.querySelector('.swiper')) {
			const slider = activeItemContent.querySelector('.swiper')
			activeSlide = ++slider.swiper.activeIndex
		}

		let hash = `s=${indexActiveSection},i=${indexItem}${activeSlide ? '-' + activeSlide : ''}`
		url.hash = encodeURIComponent(hash)
		blockUrl.url = url.href
	} else {
		setTimeout(() => {
			blockUrl.url = ''
		}, 500);
	}
}
const createMessageShare = (block, className) => {
	const messageEl = document.createElement('div')
	messageEl.classList.add('popup-reaction__message')
	messageEl.classList.add(className)

	block.insertAdjacentElement(
		'beforeend',
		messageEl
	)

	setTimeout(() => {
		messageEl.remove()
	}, 600);
}
const addMarginLock = () => {
	const menuEl = document.querySelector('.menu')
	const menuContentEl = document.querySelector('.menu__content')
	const bodyEl = document.body

	if (window.innerWidth > bodyEl.offsetWidth) {
		const valuePaddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth
		menuContentEl.style.marginLeft = valuePaddingRight / 2 * (-1) + 'px'
		menuEl.style.paddingRight = valuePaddingRight + 'px'
		bodyEl.style.paddingRight = valuePaddingRight + 'px'
	} else {
		menuContentEl.style.marginLeft = ''
		menuEl.style.paddingRight = ''
		bodyEl.style.paddingRight = ''
	}
}


document.addEventListener('click', e => {
	const target = e.target
	if (target.closest('.popup-reaction__opener')) {
		e.preventDefault()
		const opener = target.closest('.popup-reaction__opener')

		// перемикання між попапами
		if (document.querySelector('.popup-reaction.-open') && document.querySelector('.popup-reaction.-open') != opener.closest('.popup-reaction')) {
			document.querySelector('.popup-reaction.-open').classList.remove('-open')
		}

		opener.closest('.popup-reaction').classList.toggle('-open')

		// заповнення попапа info
		const popupInfo = opener.closest('.popup-reaction_info')

		if (popupInfo) {
			if (popupInfo.classList.contains('-open')) {
				const activeContent = document.querySelector('.main-content.-active .main-content__content.-active')
				const popupSettings = activeContent.popupSettings ? activeContent.popupSettings : activeContent.querySelector('.swiper-slide-active').popupSettings
				updatePopupInfo(popupSettings)
			} else {
				updatePopupInfo()
			}
		}

		// створення посилання в попапі "Поділитися"
		const popupShare = opener.closest('.popup-reaction_share')

		if (popupShare) {
			if (popupShare.classList.contains('-open')) {
				updatePopupShare(popupShare.querySelector('.popup-reaction__url'), true)
			} else {
				updatePopupShare(popupShare.querySelector('.popup-reaction__url'))
			}
		}
	}
	// приховати відкритий попап
	if (!target.closest('.popup-reaction') && document.querySelector('.popup-reaction.-open')) {
		// очищення попапів
		const openPopup = document.querySelector('.popup-reaction.-open')
		if (openPopup.classList.contains('popup-reaction_info')) {
			updatePopupInfo()
		} else if (openPopup.classList.contains('popup-reaction_share')) {
			updatePopupShare(openPopup.querySelector('.popup-reaction__url'))
		}

		document.querySelector('.popup-reaction.-open').classList.remove('-open')
	}
	// action slider arrow
	if (target.closest('.popup-reaction__arrow')) {
		const arrowEl = target.closest('.popup-reaction__arrow')
		const popupEl = arrowEl.closest('.popup-reaction')
		const sliderEl = popupEl.previousElementSibling.querySelector('.main-content__content.-active').querySelector('.slider-main-content__body')
		const objSlider = sliderEl.swiper


		if (!sliderEl.classList.contains('-animSlides')) {
			if (target.closest('.popup-reaction__arrow_prev')) {
				objSlider.slideTo(objSlider.activeIndex - 1)
			}
			if (target.closest('.popup-reaction__arrow_next')) {
				objSlider.slideTo(objSlider.activeIndex + 1)
			}
		}

		showPopupInfo(objSlider.slides[objSlider.activeIndex], popupEl.nextElementSibling)
	}


	if (target.closest('[data-link]')) {
		e.preventDefault()
		const btnGoTo = target.closest('[data-link]')
		if (btnGoTo.hasAttribute('data-link')) {
			const arrIndex = btnGoTo.dataset.link.split(',').map(index => index.trim())

			// отримання елементів до яких слід перейти
			const arrElemGoTo = arrIndex.map((indexGoTo, index) => {
				const mainContent = document.querySelector(`.main-content[data-tab-content="${arrIndex[0]}"]`)

				if (index) {
					const elemGoTo = mainContent.querySelectorAll('.main-content__item')[indexGoTo - 1]

					if (elemGoTo.classList.contains('-btn-plus')) {
						return elemGoTo.children[0]
					} else {
						return elemGoTo

					}
				} else {
					return document.querySelector(`.menu__item[data-tab-item="${indexGoTo}"]`)
				}

			})

			// перехід до елементів
			let indexElem = 0
			const goTo = (el) => {
				el.click()
				indexElem += 1
				goToElem()
			}
			const goToElem = () => {
				if (indexElem == 0) {
					document.body.classList.add('-animGoTo')
					goTo(arrElemGoTo[0])
					animMenuLabels(arrElemGoTo[0])
				} else {
					if (arrElemGoTo[indexElem]) {
						setTimeout(() => {
							goTo(arrElemGoTo[indexElem])
						}, 500)
					} else {
						document.body.classList.remove('-animGoTo')
					}
				}
			}
			goToElem()

		}
	}
	// копіювати посилання на один матеріал
	if (target.closest('.popup-reaction__url')) {
		e.preventDefault()
		const blockUrl = target.closest('.popup-reaction__url')

		navigator.clipboard.writeText(blockUrl.url)
			.then(() => {
				createMessageShare(blockUrl.parentElement, '-success')
			})
			.catch(err => {
				createMessageShare(blockUrl.parentElement, '-failed')
			});
	}

	// стрілка відкриття
	if (target.closest('.menu__arrow')) {
		e.preventDefault()
		document.querySelector('.menu').classList.toggle('-open')

		// додавання відступу замість смуги прокручування
		addMarginLock()

		document.body.classList.toggle('-lock')
	}
	// закриття меню при натисканні по іншій області
	if (target.closest('.menu__overlay')) {
		document.querySelector('.menu').classList.remove('-open')
		addMarginLock()
		document.body.classList.remove('-lock')
	}
})


document.addEventListener('mousemove', e => {
	const target = e.target
	// set setup tooltip
	if (target.closest('[data-tooltip-label]')) {
		const item = target.closest('[data-tooltip-label]')

		const tooltip = document.querySelector('.tooltip')
		if (tooltip) {
			tooltip.style.cssText = `top: ${e.pageY + 8}px;left: ${e.pageX + 20}px;`
		}
	}
})
document.addEventListener('mouseover', e => {
	const target = e.target
	// add tooltip
	if (target.closest('[data-tooltip-label]')) {
		const item = target.closest('[data-tooltip-label]')

		if (item.dataset.tooltipLabel && !document.querySelector('.tooltip')) {
			document.body.insertAdjacentHTML(
				'beforeend',
				`<div class="tooltip">${item.dataset.tooltipLabel}</div>`
			)
		}
	}
	// section label
	if (target.closest('.menu__item')) {
		const item = target.closest('.menu__item')

		if (!item.classList.contains('-active')) {
			animMenuLabels(item)
		}
	}
})
document.addEventListener('mouseout', e => {
	const target = e.target
	// remove tooltip
	if (target.closest('[data-tooltip-label]')) {
		const tooltip = document.querySelector('.tooltip')

		if (tooltip) {
			tooltip.remove()
		}
	}
	// section label
	if (target.closest('.menu__item')) {
		const item = target.closest('.menu__item')

		// reset labels
		if (!item.classList.contains('-active')) {
			animMenuLabels(document.querySelector('.menu__item.-active') ? document.querySelector('.menu__item.-active') : null)
		}
	}
})
document.addEventListener('keydown', e => {
	if (e.code === 'Escape') {
		// закриття меню
		if (document.querySelector('.menu.-open')) {
			const menuEl = document.querySelector('.menu.-open')
			menuEl.classList.remove('-open')
		}
	}
})

const showPopupInfo = (content, popup) => {
	let hasSettings
	// перевірка наявності властивості для popup
	if (content.popupSettings) {
		hasSettings = content.popupSettings
	} else if (content.querySelector('.swiper-slide')) {
		hasSettings = content.querySelector('.swiper-slide').popupSettings
	}

	if (hasSettings) {
		popup.classList.add('-visible')
	} else {
		popup.classList.remove('-visible')
	}
}

const changeSlide = slider => {
	const blockArrows = slider.el.closest('.main-content').querySelector('.popup-reaction__arrows')
	const arrows = Array.from(blockArrows.children)

	if (arrows.length > 0) {
		arrows.forEach(arrow => arrow.classList.remove('-disable'))

		if (slider.activeIndex == 0) {
			arrows[0].classList.add('-disable')
		}
		if (slider.activeIndex == slider.slides.length - 1) {
			arrows[1].classList.add('-disable')
		}
	}
}
// створення перших елентів в переданому контенті
function initElements(type, el) {
	const classes = {
		'video': 'video-js',
		'slider': 'swiper-initialized',
		'removeSlider': 'swiper-initialized',
	}

	// remove old elements
	const oldElement = document.querySelector(`.${classes[type]}`)

	if (oldElement) {
		if (type == 'video') {
			oldElement.classList.add('-oldPlayer')
		}
		setTimeout(() => {
			if (type == 'video') {
				oldElement.classList.remove('-oldPlayer')
				videojs(oldElement).dispose()
			} else if (type == 'slider' || type == 'removeSlider') {
				oldElement.swiper.destroy()
			}
		}, 400);
	}

	// new init elements
	if (type == 'video') {
		let wrapVideo;

		if (el.querySelector('[data-tab-content]')) {
			const content = el.querySelector('[data-tab-content]')
			if (content.urlVideo) {
				wrapVideo = content
			} else {
				wrapVideo = el.querySelector('.swiper-slide')
			}
		} else if (el.querySelector('.swiper-slide')) {
			wrapVideo = el.querySelector('.swiper-slide')
		} else {
			wrapVideo = el
		}


		if (wrapVideo.urlVideo) {
			wrapVideo.insertAdjacentHTML(
				'beforeend',
				`<video class="-reaction-video video-js video-js-home -video"></video>`
			)

			const player = videojs(wrapVideo.querySelector('video'), {
				controls: true,
				controlBar: {
					pictureInPictureToggle: false
				},
			})
			player.src({ type: 'video/mp4', src: wrapVideo.urlVideo });
			player.on('ended', function () {
				if (this.isFullscreen()) {
					this.exitFullscreen()
				}
			})
		}
	} else if (type == 'slider') {
		new Swiper(el, {
			simulateTouch: false,
			grabCursor: false,
			watchOverflow: false,
			speed: 500,
			on: {
				slideChangeTransitionStart: function () {
					this.el.classList.add('-animSlides')
				},
				slideChangeTransitionEnd: function () {
					this.el.classList.remove('-animSlides')
				},
				slideChange: function () {
					initElements('video', this.slides[this.activeIndex])
					changeSlide(this)
				},
				init: changeSlide
			}
		})
	}
}


function insertTags(text) {
	const classSmall = {
		start: '<span class="small">',
		end: '</span>'
	}
	const tags = [
		// текст над символом
		{
			name: 'text-line',
			start: '<span class="formulas__text-line">',
			end: '</span>',
		},
		{
			name: 'text-line-text',
			...classSmall
		},
		// текст над символом з довгою стрілкою
		{
			name: 'text-line-width',
			start: `<span class="formulas__text-line formulas__text-line_width">${classSmall.start}`,
			end: `${classSmall.end}</span>`,
		},
		{
			name: 'e',
			start: '<span class="formulas__e">',
			end: '</span>',
		},
		// текст під символом
		{
			name: 'bottom-label',
			start: '<span class="formulas__b-label">',
			end: '</span>',
		},
		{
			name: 'bottom-label-text',
			...classSmall
		},
		{
			name: 'bottom-label-left',
			start: '<span class="formulas__b-label formulas__b-label_left">',
			end: '</span>',
		},
		{
			name: 'bottom-label-left-text',
			start: '<span>',
			end: '</span>',
		},
		// два показники
		{
			name: 'indexes',
			start: '<span class="formulas__indexes">',
			end: '</span>',
		},
		{
			name: 'top-index',
			start: '<span class="formulas__t-index">',
			end: '</span>',
		},
		{
			name: 'bottom-index',
			start: '<span class="formulas__b-index">',
			end: '</span>',
		},
	]

	let formattedText = text
	const replaceTextToTag = () => {
		tags.forEach(tag => {
			if (formattedText.includes(`<${tag.name}>`)) {
				formattedText = formattedText.replace(`<${tag.name}>`, tag.start).replace(`</${tag.name}>`, tag.end)
				replaceTextToTag()
			} return
		})
	}
	replaceTextToTag()

	return formattedText
}

// створення шаблону formulas
function createTemplateFormulas(className, objFormulas) {
	const templateFormulasStart = `<div class="${className}__formulas formulas"><div class="formulas__rows">`
	const templateFormulasEnd = '</div></div>'

	let templateFormulas = ''

	objFormulas.forEach(formulaSetting => {
		// створення row
		const templateRowStart = `<div class="formulas__row${formulaSetting.type && formulaSetting.type == 'parts' ? ' formulas__row_parts' : ''}">`
		const templateRowEnd = '</div>'

		let templateRowContent = ''
		if (!formulaSetting.type) {
			// тип "text"
			// додавання html тегів
			templateRowContent += insertTags(formulaSetting.text)
		} else if (formulaSetting.type == 'parts') {
			// створення формули в 3 колонки
			let templateColumns = ''

			formulaSetting.text.forEach(columnSetting => {
				const templateColumnStart = '<div class="formulas__col">'
				const templateColumnEnd = '</div>'

				// створення колонки
				let templateColumn = ''
				// створення рядків колонки
				if (Array.isArray(columnSetting)) {
					columnSetting.forEach(subrowSetting => {
						templateColumn += `<div class="formulas__subrow">${insertTags(subrowSetting)}</div>`
					})
				} else {
					templateColumn += columnSetting
				}

				// додавання колонки до columns template
				templateColumns += templateColumnStart + templateColumn + templateColumnEnd
			})

			// додавання колонок до row
			templateRowContent += templateColumns
		} else {
			return false
		}

		// додавання готових рядків формул до блоку formulas
		templateFormulas += templateRowStart + templateRowContent + templateRowEnd
	})

	return templateFormulasStart + templateFormulas + templateFormulasEnd
}

function updatePopupInfo(setting) {
	const popupBody = document.querySelector('.main-content.-active .popup-reaction_info .popup-reaction__body')

	if (setting) {
		let templateBlockOpener = ''

		if (Object.hasOwn(setting, 'formulas')) {
			templateBlockOpener += createTemplateFormulas('popup-reaction', setting.formulas)
		}

		if (Object.hasOwn(setting, 'btns')) {
			const templateBtnsStart = '<div class="popup-reaction__btns">'
			const templateBtnsEnd = '</div>'

			// створення кнопок
			let templateBtns = ''
			setting.btns.forEach(btnSettings => {
				templateBtns += `<a href="" class="popup-reaction__btn" data-link="${btnSettings.link}"><span>${btnSettings.text}</span><span class="-icon-arrow-right"></span></a>`
			})

			// додавання кнопки до opener
			templateBlockOpener += templateBtnsStart + templateBtns + templateBtnsEnd
		}

		popupBody.insertAdjacentHTML('beforeend', templateBlockOpener)
	} else {
		setTimeout(() => {
			popupBody.innerHTML = ''
		}, 500);
	}
}

function createItems(items, type) {
	let templateItems = ''

	let createItem = (itemData, isItemPlus) => {
		return `<a href="" class="main-content__${isItemPlus ? 'plus' : 'item'}" data-tab-item data-tooltip-label="${itemData.tooltip}">${isItemPlus ? '' : itemData.text + '<span class="-icon-arrow-right"></span>'}</a>`
	}

	items.forEach(itemData => {
		if (!itemData.hasOwnProperty('items')) {
			// item
			templateItems += `<li>` + createItem(itemData) + `</li>`
		} else if (itemData.type == 'plus') {
			// створення item з кнопкою
			let templateItemsItemPlus = ''

			itemData.items.forEach((itemPlusData, i) => {
				templateItemsItemPlus += createItem(itemPlusData, i ? true : false)

			})

			templateItems += '<li><div class="main-content__item -btn-plus">' + templateItemsItemPlus + '</div></li>'
		}
		if (itemData.type == 'spoller') {
			templateItems += 'insertSpoller'
		}
	})

	return templateItems
}

function getElementsMainContent(items) {
	const arrItemsData = []
	const arrContentsData = []

	let addContentSpoller = (dataSpoller) => {
		dataSpoller.items.forEach(item => {
			if (item.type == 'spoller') {
				addContentSpoller(item)
			} else if (item.type == 'plus') {
				item.items.forEach(itemPlus => arrContentsData.push(itemPlus))
			} else if (!item.type) {
				arrContentsData.push(item)
			}
		})
	}
	let getData = (firstItems = null) => {
		let items = arrItemsData.length == 0 ? firstItems : arrItemsData[arrItemsData.length - 1].items

		items.forEach(item => {
			if (item.type == 'spoller') {
				arrItemsData.push(item)
				addContentSpoller(item)
			} else if (item.type == 'plus') {
				item.items.forEach(itemPlus => arrContentsData.push(itemPlus))
			} else if (!item.type) {
				arrContentsData.push(item)
			}
		})
	}
	getData(items)

	return [arrItemsData, arrContentsData]
}

// створення пунктів головного меню
const menuListEl = document.querySelector('.menu__list')
if (menuListEl) {
	const menuLabelEl = document.querySelector('.menu__label')
	const tabsMainContentsEl = document.querySelector('.main__contents')
	let templateItemsMainMenu = ''
	let templateLabelsMenu = ''


	const createTemplatePopup = (typePopup) => {
		const templatePopupStart = `<div class="main-content__popup popup-reaction popup-reaction_${typePopup} ${typePopup != 'info' ? 'popup-reaction_mini' : ''} ${typePopup == 'share' ? '-visible' : ''}">`
		const templatePopupEnd = '</div>'
		const templateOpener = `<div class="popup-reaction__opener"><a href=""><span class="-icon-${typePopup == 'share' ? 'share' : 'arrow-right'}"></span></a></div>`
		const templateBodyStart = '<div class="popup-reaction__body">'
		const templateBodyEnd = '</div>'

		let templateArrows = ''
		let templateUrl = ''
		if (typePopup == 'switch') {
			let templateArrow = ''

			const arrowsData = [
				{
					text: 'Попередня реакція',
					typeArrow: 'prev'
				},
				{
					text: 'Наступна реакція',
					typeArrow: 'next'
				},
			]

			arrowsData.forEach(arrowData => {
				templateArrow += `<div class="popup-reaction__arrow popup-reaction__arrow_${arrowData.typeArrow}">${arrowData.text}<span class="-icon-arrow-right-long"></span></div>`
			})

			templateArrows += `<div class="popup-reaction__arrows">${templateArrow}</div>`
		} else if (typePopup == 'share') {
			templateUrl += '<a href="" class="popup-reaction__url">Скопіювати посилання</a>'
		}

		return templatePopupStart + templateOpener + templateBodyStart + templateArrows + templateUrl + templateBodyEnd + templatePopupEnd
	}
	// функції для створення спойлерів
	const createTemplateSpoller = (dataSpoller, indexSpoller, arrItemsMenu) => {
		let hasClassActive = false
		if (indexSpoller == 0 && arrItemsMenu.indexOf(dataSpoller) == 0) {
			hasClassActive = true
		}
		const templateSpollerStart = '<div class="main-content__submenu" data-spollers="min, 0">'
		const templateSpollerEnd = '</div>'

		const templateOpener = `<a href="" class="main-content__item${hasClassActive ? ' -active' : ''}" ${dataSpoller.tooltip ? ` data-tooltip-label="${dataSpoller.tooltip}"` : ''} data-spoller-item>${dataSpoller.openerText}<span class="-icon-arrow-right"></span></a>`
		const templateListsStart = `<div class="main-content__sublist"><ul class="main-content__list">`
		const templateListsEnd = `</ul></div>`
		const templateItems = createItems(dataSpoller.items)

		return templateSpollerStart + templateOpener + templateListsStart + templateItems + templateListsEnd + templateSpollerEnd
	}

	const createTemplateSpollers = (dataSpoller, indexSpoller, arrItemsMenu) => {
		const arrSpollers = [dataSpoller]
		// отримання усіх спойлерів в спойлері
		const getAllSpollers = (dataSpoller) => {
			dataSpoller.items.forEach(objSpoller => {
				if (objSpoller.type == 'spoller') {
					arrSpollers.push(objSpoller)
					getAllSpollers(objSpoller)
				}
			})
		}
		getAllSpollers(dataSpoller)

		// складання усіх спойлерів в один
		const arrAllTemplateSpoller = []
		// отримання шаблонів спойлерів
		const arrTempalteSpollers = arrSpollers.map(objSpoller => createTemplateSpoller(objSpoller, indexSpoller, arrItemsMenu)).reverse()

		if (arrTempalteSpollers.length > 1) {
			let joinTemplatesSpollers = '<li>' + arrTempalteSpollers[0] + '</li>'

			arrTempalteSpollers.forEach((templateSpoller, i) => {
				if (templateSpoller.includes('insertSpoller')) {
					joinTemplatesSpollers = '<li>' + templateSpoller.replace('insertSpoller', joinTemplatesSpollers) + '</li>'
				}
			})

			arrAllTemplateSpoller.push(joinTemplatesSpollers)
		} else {
			arrAllTemplateSpoller.push('<li>' + arrTempalteSpollers[0] + '</li>')
		}

		return arrAllTemplateSpoller
	}


	for (const indexSection in data) {
		const objSection = data[indexSection];
		// створення нижнього меню
		templateItemsMainMenu += `<li><a href="" class="menu__item"><span>${objSection.text}</span></a></li>`
		templateLabelsMenu += `<span>${objSection.label}</span>`

		// створення main content

		const [arrDataSpollers, arrContentsData] = getElementsMainContent(objSection.items)

		// створення шаблона спойлера
		const arrTemplatesSpollers = arrDataSpollers.map((dataSpoller, indexSpoller) =>
			createTemplateSpollers(dataSpoller, indexSpoller, objSection.items));

		// інтеграція спойлерів до меню
		let templatesItems = createItems(objSection.items)
		arrTemplatesSpollers.forEach(spoller => {
			templatesItems = templatesItems.replace('insertSpoller', spoller)
		})

		// створення menu
		const templateMainContentMenuStart = '<div class="main-content__menu" data-tab-items><ul class="main-content__list">'
		const templateMainContentMenuEnd = '</ul></div>'
		const templateMenuMainContent = templateMainContentMenuStart + templatesItems + templateMainContentMenuEnd


		// створення content
		let templateContentsMainContent = ''
		arrContentsData.forEach(arrContentData => {
			const templateContentStart = '<div class="main-content__content">'
			const templateContentEnd = '</div>'
			let templateSlider = ''
			// створення слайдера
			if (Array.isArray(arrContentData.content)) {
				const contentData = arrContentData.content
				const templateBlockSliderStart = '<div class="main-content__slider slider-main-content">'
				const templateBlockSliderEnd = '</div>'
				const templateBodySliderStart = '<div class="slider-main-content__body swiper">'
				const templateBodySliderEnd = '</div>'
				const templateWrapperSliderStart = '<div class="slider-main-content__wrapper swiper-wrapper">'
				const templateWrapperSliderEnd = '</div>'

				let templateSlidesSlider = ''

				for (let index = 0; index < contentData.length; index++) {
					templateSlidesSlider += '<div class="slider-main-content__slide swiper-slide"></div>'
				}

				templateSlider += templateBlockSliderStart + templateBodySliderStart +
					templateWrapperSliderStart + templateSlidesSlider + templateWrapperSliderEnd
					+ templateBodySliderEnd + templateBlockSliderEnd
			}

			templateContentsMainContent += templateContentStart + templateSlider + templateContentEnd
		})


		// створення попапів
		const templatePopupMainContent = createTemplatePopup('switch') + createTemplatePopup('info') + createTemplatePopup('share')

		// створення main content
		const templateItemContentsStart = '<div class="main-content__contents" data-tab-contents>'
		const templateItemContentsEnd = '</div>'
		const templateMainContentStart = '<div class="main__content main-content"><div class="main-content__body" data-tab="min, 0" data-animation-show="showTabContent, 500" data-animation-hide="hideTabContent, 500">'
		const templateMainContentEnd = '</div></div>'
		const templateMainContents = templateItemContentsStart + templateContentsMainContent + templateItemContentsEnd
		const templateMainContent = templateMainContentStart + templateMenuMainContent + templateMainContents + templatePopupMainContent + templateMainContentEnd
		tabsMainContentsEl.insertAdjacentHTML(
			'beforeend', templateMainContent
		)
	}
	menuListEl.insertAdjacentHTML(
		'beforeend', templateItemsMainMenu
	)
	menuLabelEl.insertAdjacentHTML(
		'beforeend', templateLabelsMenu
	)

	const setAttributeContent = (item, content, index) => {
		item.setAttribute('data-tab-item', index)
		content.setAttribute('data-tab-content', index)
	}

	// створення структури табів
	for (const indexSection in data) {
		const objSection = data[indexSection];
		const menuItem = document.querySelectorAll('.menu__item')[indexSection - 1]
		const mainContent = document.querySelectorAll('.main-content')[indexSection - 1]
		// задання атрибутів для нижнього меню
		setAttributeContent(menuItem, mainContent, indexSection)

		const mainContentItems = mainContent.querySelectorAll('[data-tab-item]')
		const mainContentContents = mainContent.querySelectorAll('.main-content__content')
		for (let index = 0; index < mainContentItems.length; index++) {
			const mainContentItem = mainContentItems[index];
			const mainContentContent = mainContentContents[index];

			// задання атрибутів елементам main content
			setAttributeContent(mainContentItem, mainContentContent, index + 1)

			// задання параметрів для контента
			const contentData = getElementsMainContent(objSection.items)[1][index].content
			if (Array.isArray(contentData)) {
				const slides = mainContentContent.querySelectorAll('.swiper-slide')

				slides.forEach((slide, i) => {
					slide.urlVideo = contentData[i].urlVideo
					slide.popupSettings = contentData[i].popup
				})
			} else {
				if (contentData) {
					mainContentContent.urlVideo = contentData.urlVideo
					mainContentContent.popupSettings = contentData.popup
				}
			}
		}
	}
}



const urlHash = window.location.hash
if (urlHash) {
	const hash = decodeURIComponent(urlHash).replace('#', '')
	// формування об'єкту з параметрів hash
	const objData = {}
	hash.split(',').forEach(text => {
		const arrData = text.split('=')
		objData[arrData[0]] = arrData[1]
	})

	// створення та вставлення елементів
	const createLabels = (dataElem, parentElem) => {
		// шаблон елементів
		const hasParam = Array.isArray(dataElem)
		let templateEl = ''

		if (hasParam) {
			const [elemName, text] = dataElem

			const tags = {
				title: 'h2',
				subtitle: 'h3',
				label: 'div',
				desc: 'div',
			}
			const labels = {
				title: 'Розділ',
				subtitle: 'Тема',
				label: 'Назва досліду',
				desc: 'Опис досліду',
			}

			const tag = tags[elemName]
			const className = `${elemName == 'desc' ? 'menu' : 'main'}__${elemName}`

			// перевірка чи пункт меню не містить "плюс"
			templateEl = text ? `<${tag} class="${className}"><span class="bold">${labels[elemName]}:</span> ${text}</${tag}>` : false
		} else {
			templateEl = dataElem
		}


		if (templateEl) {
			parentElem.insertAdjacentHTML(
				'beforeend',
				templateEl
			)
		}
	}

	// функція для отримання об'єкту пункту та напису спойлера (тема)
	const getDataItem = (objSection, indexItem) => {
		let item = {}
		let textSubject = ''
		let currentIndexItem = 0

		const arrIndexs = []
		if (indexItem.includes('-')) {
			arrIndexs.push(...indexItem.split('-'))
		} else {
			arrIndexs.push(indexItem)
		}

		const getItem = items => {
			items.forEach((objItem, i) => {
				if (!objItem.items) {
					if (currentIndexItem == arrIndexs[0]) {
						// заміна кількох реакцій на одну
						if (arrIndexs.length > 1) {
							objItem.content = objItem.content[arrIndexs[1] - 1]
						}

						item = objItem
					}

					currentIndexItem++
				} else {
					// додавання "теми"
					if (Object.keys(item).length == 0 && objItem.type == 'spoller') {
						textSubject = objItem.openerText
					}

					getItem(objItem.items)
				}
			})
		}
		getItem(objSection.items)
		console.log(item, textSubject, indexItem);

		return [item, textSubject]
	}


	const objActiveSection = data[++objData.s]

	const mainHeader = document.querySelector('.main__header')
	const menuMain = document.querySelector('.menu__main')

	if (objData.s) {
		// створення назви розділу
		createLabels(['title', objActiveSection.label], mainHeader)
	}
	if (objData.i) {
		const [objItem, textSubject] = getDataItem(objActiveSection, objData.i)

		// ініціалізація головного відео
		const mainVideo = document.querySelector('.main__video')
		if (mainVideo) {
			const mainPlayer = videojs(mainVideo, {
				controls: true,
				controlBar: {
					pictureInPictureToggle: false
				},
			})

			mainPlayer.src({ type: 'video/mp4', src: objItem.content.urlVideo });

			mainPlayer.on('ended', function () {
				if (this.isFullscreen()) {
					this.exitFullscreen()
				}
			})
		}

		// створення теми
		createLabels(['subtitle', textSubject], mainHeader)
		// створення назви досліду
		createLabels(['label', objItem.text], document.querySelector('.main__row'))
		// створення блоку з формулами
		const objFormulas = objItem?.content?.popup?.formulas

		if (objFormulas) {
			createLabels(createTemplateFormulas('menu', objFormulas), menuMain)
			document.querySelector('.menu__content').classList.add('-big')
		}
		// створення опису досліду
		createLabels(['desc', objItem.tooltip], menuMain)
	}
}



const tabs = new Tabs()
tabs.init()

const spoller = new Spoller()
spoller.init()
