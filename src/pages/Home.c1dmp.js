// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code

    $w('#header1').onViewportLeave((event) => {
        // Change header background to Ink navy when it leaves the viewport (scrolled past ~40px)
        $w('#header1').style.backgroundColor = '#1B2A3D';
    });
});
