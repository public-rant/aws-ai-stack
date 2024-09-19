# If you have the jq CLI command installed you can use that with the --json flag
# on serverless info to get the URLs from the deployed services. If you do not
# have jq installed, you can get the URLs by running "serverless auth info" and
# "serverless ai-chat info" and copying the URLs manually into the environment
# variables.
export VITE_CHAT_API_URL=$(serverless aiChatApi info --json | jq -r '.outputs[] | select(.OutputKey == "ChatApiUrl") | .OutputValue')
export VITE_AUTH_API_URL=$(serverless auth info --json | jq -r '.outputs[] | select(.OutputKey == "AuthApiUrl") | .OutputValue')

# now you can run the local development server
cd website/app
npm run build