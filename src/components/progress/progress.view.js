
import ViewBase from '../../base.view';

export default function CardView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Indeterminate (Ring)'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-progress-circle.indeterminate.small', 
                            m('svg.haneul-progress-circle.indeterminate.animation', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 2 20' 
                            }))
                        )),

                        m('.mb-40px', m('.haneul-progress-circle.indeterminate', 
                            m('svg.haneul-progress-circle.indeterminate.animation', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 2 20' 
                            }))
                        )),

                        m('.mb-40px', m('.haneul-progress-circle.indeterminate.large', 
                            m('svg.haneul-progress-circle.indeterminate.animation', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 2 20' 
                            }))
                        )),
                        
                    ])
                ),                 
                m('.haneul-divider'),,
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Determinate (Ring)'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('i.haneul-progress-circle.determinate.small',
                            m('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 2 20' 
                            }))
                        )),

                        m('.mb-40px', m('i.haneul-progress-circle.determinate',
                            m('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 2 20' 
                            }))
                        )),

                        m('.mb-40px', m('i.haneul-progress-circle.determinate.large',
                            m('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 40 40'
                            }, m('path.haneul-progress-circle.circle-path', { 
                                fill: 'none', 
                                'stroke-width': 4, 
                                d: 'M20,2 A18,18 1 0,1 20 38 A18,18 1 0,1 20 42' 
                            }))
                        )),
                        
                    ])
                ),,                 
                m('.haneul-divider'),,
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Indeterminate (Progress Bar)'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-progress-bar.indeterminate',
                            m('.indicator')
                        )),
                        
                    ])
                ),                 
                m('.haneul-divider'),,
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Determinate (Progress Bar)'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-progress-bar.determinate',
                            m('.indicator')
                        )),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
