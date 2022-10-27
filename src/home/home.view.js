
import ViewBase from '../base.view';
import HaneulLogo from '../images/haneul-logo.png'
import CoverImage from '../images/cover.jpg'

export default function HomeView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.haneul-nav-wrapper', 
                    m('header.haneul-nav', [
                        m('.nav-group',
                            m('a', { href: '/dist/#/' }, m('img', { src: HaneulLogo }))
                        ),
                        m('.nav-group.pr-80px', 
                            m('ul', [
                                m('li.menu-item.active', m('a.menu-item--content', { href: 'javascript:;' }, m('pre', 'About Haneul'))),
                                m('.menu-divider'),
                                m('li.menu-item.min-w-70.mr-9', m('a.menu-item--content', { href: '/dist/#/components/badge' }, m('pre', 'Components'))),
                                m('li.menu-item.min-w-70.mr-9', m('a.menu-item--content', { href: '/dist/#/design-token/colours' }, m('pre', 'Design Token'))),
                            ])
                        ),
                        m('.nav-group', 
                            m('ul.right-nav', [
                                m('li.ml-15.p-relative', m('a.line-height-20.support', { href: '#' }, 'Issues')),
                            ])
                        )
                    ])
                ),
                m('div', { style: 'background-image: url("' + CoverImage + '"); background-size: cover;' },
                    m('.container-haneul.pt-80px', { style: 'height: 340px;' },
                        m('.welcome-box', [
                            m('.welcome-box--left', [
                                m('.titlehaneul', m('strong', 'Welcome to Haneul')),
                                m('.bannertxt', m('span', 'An open platform supporting the capability to discover and efficiently realise the differentiated customer values.'))
                            ]),
                            m('.welcome-box--right', 'Getting Started'),
                        ])
                    ), 
                    m('.slogan-box', 
                        m('slogan-box-bg', 
                            m('.container-haneul', [
                                m('p.slogan-box-line', m('span.slogan-text', [m('span.slogan-text-bg', ''), 'UX Standard Guidelines'])),
                                m('p.slogan-box-line', m('span.slogan-text', [m('span.slogan-text-bg', ''), 'Materialise the user values with ', m('strong', 'upgraded total experience')])),
                            ])
                        )
                    ),
                ),
                
                
                m('.bg-haneul',
                    m('.container-haneul.pt-80px',
                        m('.haneul-box', [
                            m('.haneul-box-title.mb-40px', [
                                m('h2', 'Planning solutions centered on users'),
                                m('.haneul-box-sub-title', [
                                    m('p', 'We provide the standards and policies necessary to materialise the customer values we want to actualise in' + 
                                    'solutions and services with upgraded user experience, and the assets that can improve work efficiency.')
                                ])
                            ]),
                            m('.haneul-card-wrapper', [
                                m('.haneul-card', { style: 'width: 354px; height: 296px' }, [
                                    m('.header', m('strong', 'By Developer, For Developer')),
                                    m('h5.title', 'Flexibile Needs'),
                                    m('p.body', 'Unlike other design system, this design system is built by developers using simple CSS, making it ' +
                                    'very flexible for changing to suit the flexible needs.')
                                ]),
                                m('.haneul-card', { style: 'width: 354px; height: 296px; margin-left: 30px;' }, [
                                    m('.header', m('strong', 'Guide')),
                                    m('h5.title', 'UI/UX Consistency'),
                                    m('p.body', 'With this design system, we can work within the constraints of a system instead of littering our ' + 
                                    'stylesheets with arbitrary values.')
                                ]),
                                m('.haneul-card', { style: 'width: 354px; height: 296px; margin-left: 30px;' }, [
                                    m('.header', m('strong', 'Pricing')),
                                    m('h5.title', 'Free and Open Source'),
                                    m('p.body', 'This design system is free forever licensed under commercial friendly Apache 2.0 open source license. ' +
                                    'Only the sky is the limit.')
                                ]),
                            ])
                        ])
                    )
                ),                
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Join the community'),
                            m('.haneul-box-sub-title', [
                                m('p', 'Our community drives the rhythm and direction of Haneul. By contributing in this open source project, your voice ' + 
                                'will help shape its future.'),
                                m('a.view-more-dark', { href: 'javascript:;' }, 'GitHub')
                            ])
                        ])
                    ])
                ), 
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
                this.getBaseViews()];
        }
    }
}
