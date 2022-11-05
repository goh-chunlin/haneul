import HaneulLogo from '../images/haneul-logo.png'

export default function DesignTokenLayout() {

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
                                m('li.menu-item.min-w-70.mr-9', m('a.menu-item--content', { href: '/#/components/badge' }, m('pre', 'Components'))),
                                m('li.menu-item.min-w-70.mr-9.active', m('a.menu-item--content', { href: 'javascript:;' }, m('pre', 'Design Token'))),
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
                                m('p.menu-item-title', 'Design Token'),
                                m('button.menu-l1', { onclick: () => { window.location="#!/design-token/colours" } }, m('span', 'Colours'))
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
