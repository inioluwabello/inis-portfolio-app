# inis-portfolio-app

Contains the following Projects - 
# Frontend Mentor - Newsletter sign-up form with success message solution
---------------------------------------------------------------------------

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github] (https://github.com/inioluwabello/inis-portfolio-app)
- Live Site URL: [Vercel] (inis-portfolio.vercel.app/newsletter-sign-up)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I didn't learn anything new but it was good practice to reinforce old knowledge
Proud of a clean components tree

```jsx
<NewsLetterLayout>
      <div class={styles.contentLayout}>
        {!showingSuccess && (
          <div className={styles.mainPage}>
            {pageWidth > 770 && (
              <DesktopView
                email={email}
                setEmail={setEmail}
                styles={styles}
                showingSuccess={showingSuccess}
                setShowingSuccess={setShowingSuccess}
              />
            )}
            {pageWidth <= 770 && (
              <MobileView
                email={email}
                setEmail={setEmail}
                styles={styles}
                showingSuccess={showingSuccess}
                setShowingSuccess={setShowingSuccess}
              />
            )}
          </div>
        )}

        {showingSuccess && (
          <div className={styles.successPage}>
            {pageWidth > 770 && (
              <DesktopSuccessView
                email={email}
                setEmail={setEmail}
                styles={styles}
                isMobile={pageWidth <= 770}
                setShowingSuccess={setShowingSuccess}
              />
            )}
            {pageWidth <= 770 && (
              <MobileSuccessView
                email={email}
                setEmail={setEmail}
                styles={styles}
                isMobile={pageWidth <= 770}
                setShowingSuccess={setShowingSuccess}
              />
            )}
          </div>
        )}
      </div>
    </NewsLetterLayout>
```

### Continued development

- Adding a node.js server to send emails
- Adding authentication pages
- Adding robots verification challenge

### Useful resources

- [Upmostly] (https://upmostly.com/tutorials/react-onhover-event-handling-with-examples) - React onHover Event Handling (with Examples).
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) - Viewport meta tag.
- [Amit Merchant] (https://www.amitmerchant.com/gradient-box-shadow-in-css/#:~:text=0.25%C3%97%20Rerun-,The%20%3A%3Abefore%20pseudo%20element%20trickery,it%20looks%20like%20a%20shadow.&text=As%20you%20can%20tell%2C%20since,background%20of%20the%20pseudo%2Delement.) - Gradient-y Box Shadows in CSS
- [CSS Gradient] (https://cssgradient.io/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website [Inioluwa] (https://github.com/inioluwabello)
- Frontend Mentor - [@inioluwabello](https://www.frontendmentor.io/profile/inioluwabello)
- Twitter - [@DavidInioluwaB](https://twitter.com/davidInioluwaB)

