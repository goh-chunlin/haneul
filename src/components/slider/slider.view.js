
import ViewBase from '../../base.view';

export default function SliderView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Slider'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-slider', 
                        {
                            'data-value': 60,
                            'data-min': 0,
                            'data-max': 200,
                            'data-unit': 'px'
                        }, [
                            m('span.track-filled'),
                            m('button.thumb'),
                            m('span.value')
                        ])),

                        m('.mb-40px', m('.haneul-slider.range', 
                        {
                            'data-start-value': 40,
                            'data-end-value': 80,
                            'data-min': 0,
                            'data-max': 200,
                            'data-unit': 'px'
                        }, [
                            m('span.track-filled'),
                            m('button.thumb'),
                            m('button.thumb'),
                            m('span.value')
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
