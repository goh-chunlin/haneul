
import ViewBase from '../../base.view';

export default function ColursView() {
    
    ViewBase.call(this);

    return {
        view: () => {
            return [
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Theme Colour Set'),
                            m('.haneul-box-sub-title', [
                                m('p', 'Basic colour set defined based on the Primary Colour.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', [
                            m('.mt-1', [
                                m('.d-flex', [
                                    m('.bg-primary', { style: "width: 100px; height: 100px;" }),
                                ]),
                                m('span', 'Primary Colour'),
                            ]),

                            m('.mt-1', [
                                m('.d-flex', [
                                    m('.bg-primary.tint-1', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.tint-2', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.tint-3', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.tint-4', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.tint-5', { style: "width: 100px; height: 100px;" }),
                                ]),
                                m('span', 'Primary Colour (Tint)'),
                            ]),

                            m('.mt-1', [
                                m('.d-flex', [
                                    m('.bg-primary.shade-1', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.shade-2', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.shade-3', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.shade-4', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-primary.shade-5', { style: "width: 100px; height: 100px;" }),
                                ]),
                                m('span', 'Primary Colour (Shade)'),
                            ]),

                            m('.mt-1', [
                                m('.d-flex', [
                                    m('.bg-secondary', { style: "width: 100px; height: 100px;" }),
                                ]),
                                m('span', 'Secondary Colour'),
                            ]),

                            
                        ]),
                        
                    ])
                ),                 
                m('.haneul-divider'),,
                m('.container-haneul.pt-80px',
                    m('.haneul-box', [
                        m('.haneul-box-title.mb-40px', [
                            m('h2', 'Status Colour Set'),
                            m('.haneul-box-sub-title', [
                                m('p', 'Status colour set defined for different statuses.'),
                                m('a.view-more-dark', 'See All...')
                            ])
                        ]),

                        m('.mb-40px', [

                            m('.mt-1', [
                                m('.d-flex', [
                                    m('.bg-success', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-info', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-warning', { style: "width: 100px; height: 100px;" }),
                                    m('.bg-danger', { style: "width: 100px; height: 100px;" }),
                                ]),
                            ]),
                            
                        ]),
                        
                    ])
                ),
                this.getBaseViews()];
        }
    }
}
