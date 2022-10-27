
import ViewBase from '../../base.view';

export default function BadgeView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Status Badge'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('div', m('span.haneul-status-badge--text--default', 'Default')),
                        m('div', m('span.haneul-status-badge--text--success', 'Success')),
                        m('div', m('span.haneul-status-badge--text--error', 'Error')),
                        m('div', m('span.haneul-status-badge--text--processing', 'Processing')),
                        m('div', m('span.haneul-status-badge--text--warning', 'Warning')),

                        m('div', m('span.haneul-status-badge--dot--default'), 'Default'),
                        m('div', m('span.haneul-status-badge--dot--success'), 'Success'),
                        m('div', m('span.haneul-status-badge--dot--error'), 'Error'),
                        m('div', m('span.haneul-status-badge--dot--processing'), 'Processing'),
                        m('div', m('span.haneul-status-badge--dot--warning'), 'Warning'),
                    ])
                ),                 
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Notification Badge'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('span.haneul-notification-badge--text', 'Notification', m('span.haneul-notification-badge', 'N')),
                    ])
                ),                 
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Identifier Badge'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),
                        m('span.haneul-identifier-badge', 'Notification'),
                    ])
                ),
                
                
                this.getBaseViews()];
        }
    }
}
