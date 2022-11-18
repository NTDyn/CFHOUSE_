grecaptcha.ready(function() {
    grecaptcha.execute("6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK", {action: "/contact"})
    .then(function(token) {
    document.getElementById("Token-48827836925a4fb09d24b07ef1db9f70").value = token
    });
    });