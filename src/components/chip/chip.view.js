
import ViewBase from '../../base.view';

export default function ChipView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Chip'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', m('span.haneul-input-chip.haneul-input-chip--thick', [
                            m('span.haneul-input-chip.text', 'Chip 1'),
                            m('button.haneul-input-chip.close-button')
                        ])),

                        m('.mb-40px', m('span.haneul-input-chip.haneul-input-chip--normal', [
                            m('span.haneul-input-chip.text', 'Chip 2'),
                            m('button.haneul-input-chip.close-button')
                        ])),

                        m('.mb-40px', m('span.haneul-input-chip.haneul-input-chip--light', [
                            m('span.haneul-input-chip.text', 'Chip 3'),
                            m('button.haneul-input-chip.close-button')
                        ])),
                        
                    ])
                ),                 
                m('.haneul-divider'),
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Filter Chip'),
                            m('.haneul-box-sub-title', [
                                m('p', 'This is the subtitle.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', [
                            m('label.haneul-filter-chip.haneul-filter-chip--thick.haneul-filter-chip.small', [
                                m('input', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                            m('span', ' '),
                            m('label.haneul-filter-chip.haneul-filter-chip--thick', [
                                m('input[checked]', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                        ]),

                        m('.mb-40px', [
                            m('label.haneul-filter-chip.haneul-filter-chip--normal.haneul-filter-chip.small', [
                                m('input', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                            m('span', ' '),
                            m('label.haneul-filter-chip.haneul-filter-chip--normal', [
                                m('input[checked]', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                        ]),

                        m('.mb-40px', [
                            m('label.haneul-filter-chip.haneul-filter-chip--light.haneul-filter-chip.small', [
                                m('input', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                            m('span', ' '),
                            m('label.haneul-filter-chip.haneul-filter-chip--light', [
                                m('input[checked]', { type: 'checkbox' }),
                                m('span.haneul-chip-filter', 'Option 1')
                            ]),
                        ]),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
