export default {
  logo: <span>Vipin V</span>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer:{
    text: 'Vipin`s awesome website. All rights reserved 2023'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Vipin V" />
      <meta property="og:description" content="Vipin's blog website." />
    </>
  ),
  
    logo: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
<ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3"></ellipse><path fill="#fd3c4f" d="M8,14.275v14.531c0,1.109,0.365,2.188,1.04,3.069l14.624,19.123 c0.477,0.625,1.219,0.992,2.006,0.992h12.06c1.055,0,1.645-1.216,0.992-2.045L10.255,13.493C9.513,12.552,8,13.076,8,14.275z"></path><path fill="#fff" d="M10.255,13.493C9.513,12.552,8,13.076,8,14.275v14.53c0,1.11,0.365,2.189,1.04,3.071 l7.724,10.1c2.194-1.677,2.612-4.815,0.934-7.009l-4.288-5.624C13.144,28.994,13,28.568,13,28.13V17.008L10.255,13.493z" opacity=".3"></path><path fill="#fd3c4f" d="M36.271,35.966l17.467-22.461C54.474,12.55,56,13.072,56,14.277v15.34 c0,0.499-0.148,0.987-0.424,1.401l-3.919,5.859c-0.469,0.702-1.258,1.124-2.102,1.124H37.272 C36.222,38.001,35.629,36.796,36.271,35.966z"></path><path d="M56,29.62V26c-1.755,0-3.533,0.671-4.581,2.238l-2.591,3.874c-0.371,0.555-0.995,0.888-1.662,0.888 H44c-2.761,0-5,2.238-5,5h10.555c0.844,0,1.631-0.421,2.1-1.122l3.92-5.861C55.852,30.604,56,30.118,56,29.62z" opacity=".15"></path><line x1="11.5" x2="11.5" y1="22.5" y2="26.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"></line>
</svg>
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
          Vipin V
        </span>
      </>
    )
  ,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vipin V'
    }
  },
  // ... other theme options
}

