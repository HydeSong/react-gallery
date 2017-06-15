'use strict';

var React = require('react/addons');
// var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');

// var imageURL = require('../images/1.jpg');
imageDatas = (function genImageUrl(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageUrl = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);

var ReactGalleryApp = React.createClass({
    render: function () {
        return (
            <section className="stage">
                <section className="img-sec">
                </section>
                <nav class="controller-nav">
                </nav>
            </section>
        );
    }
});
React.render(<ReactGalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactGalleryApp;
