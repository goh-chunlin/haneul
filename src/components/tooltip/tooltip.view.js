
import ViewBase from '../../base.view';

export default function TooltipView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Label Tooltip'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('.haneul-tooltip-icon', { style: 'text-align: center;' }, [
                            m('span', 'A'),
                            m('span.haneul-label-tooltip', 'Hello world!')
                        ])),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
