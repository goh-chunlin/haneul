import HaneulLogo from '../images/haneul-logo.png'

export default function ComponentsLayout() {

    return {
        view: function (vnode) {
            return [

                m('.haneul-nav-wrapper', 
                    m('header.haneul-nav', [
                        m('.nav-group',
                            m('a', { href: '/#/' }, m('img', { src: HaneulLogo }))
                        ),
                        m('.nav-group.pr-80px', 
                            m('ul', [
                                m('li.menu-item', m('a.menu-item--content', { href: '/#/' }, m('pre', 'About Haneul'))),
                                m('.menu-divider'),
                                m('li.menu-item.min-w-70.mr-9.active', m('a.menu-item--content', { href: 'javascript:;' }, m('span', 'Components'))),
                                m('li.menu-item.min-w-70.mr-9', m('a.menu-item--content', { href: '/#/design-token/colours' }, m('pre', 'Design Token'))),
                            ])
                        ),
                        m('.nav-group', 
                            m('ul.right-nav', [
                                m('li.ml-15.p-relative', m('a.line-height-20.support', { href: '#' }, 'Issues')),
                            ])
                        )
                    ])
                ),
                m('div', [
                    m('.lnb', [
                        m('h2.title', 'UX Guideline'),
                        m('nav', m('ul.menu', [
                            m('li.expandable.menu-transition', [
                                m('p.menu-item-title', 'Components'),
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/badge" } }, m('span', 'Badge'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/button" } }, m('span', 'Button'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/card" } }, m('span', 'Card'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/checkbox" } }, m('span', 'Checkbox'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/chip" } }, m('span', 'Chip'))
                            ]),
                            
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/progress" } }, m('span', 'Progress'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/radiobutton" } }, m('span', 'Radio Button'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/slider" } }, m('span', 'Slider'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/stepper" } }, m('span', 'Stepper'))
                            ]),                            
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/switch" } }, m('span', 'Switch'))
                            ]),
                            
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/tab" } }, m('span', 'Tab'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/textfield" } }, m('span', 'Text Field'))
                            ]),
                            m('li.expandable.menu-transition', [
                                m('button.menu-l1', { onclick: () => { window.location="#!/components/tooltip" } }, m('span', 'Tooltip'))
                            ]),
                        ]))
                    ]),
                    m('.guide-contents', [

                        vnode.children,

                        m('.footer-wrapper.no-absolute',
                            m('.footer', [
                                m('span.label', m('a', m('strong', 'Privacy'))),
                                m('span.divider', ''),
                                m('span.label', m('a', m('strong', 'Open Source License'))),
                                m('span.divider', ''),
                                m('span.label', 'All rights reserved.'),
                                m('.right-area', 
                                    m('button.haneul-btn.primary.solid.small', 'GitHub')
                                )
                            ])
                        ),
                    ])
                ]),
            ];
        },
    };
}
