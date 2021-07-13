var ghpages = require('gh-pages');

ghpages.publish(
	    'public', // path to public directory
	    {
		            branch: 'gh-pages',
		            repo: 'github.com/Brebeck-Jan/Learning-Svelte-and-Github-CI-CD.git', 
		            user: {
				                name: 'Brebeck-Jan', // update to use your name
				                email: 'Jan.Brebeck98@gmail.com' // Update to use your email
				            }
		        },
	    () => {
		            console.log('Deploy Complete!')
		        }
)
