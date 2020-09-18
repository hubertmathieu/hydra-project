(function () {
    const data = APP_DATA;
    const panoElement = document.querySelector('#pano');

    var viewerOpts = {
        controls: {
            mouseViewMode: data.settings.mouseViewMode
        }
    };

    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

    var scenes = data.scenes.map(function(data) {
        var urlPrefix = "images/tiles";
        var source = Marzipano.ImageUrlSource.fromString(
            urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
            { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
        var geometry = new Marzipano.CubeGeometry(data.levels);

        var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
        var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

        panoElement.addEventListener("click", function (e) {
            console.log(viewer.view().screenToCoordinates({x : (e.pageX - this.offsetLeft), y: (e.pageY - this.offsetTop)}));
        });

        var scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
        });

        data.infoHotspots.forEach(function(hotspot) {
            var element = createInfoHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
        });

        return {
            data: data,
            scene: scene,
            view: view
        };
    });

    function switchScene(scene) {
        scene.view.setParameters(scene.data.initialViewParameters);
        scene.scene.switchTo();
    }

    function createInfoHotspotElement(hotspot) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('hotspot');
        wrapper.id = hotspot.id;
        let titleContainer = document.createElement('h1');
        titleContainer.classList.add('hotspot-title');
        let completeValueContainer = document.createElement('div');
        completeValueContainer.classList.add('hotspot-value-container');
        let valueContainer = document.createElement('div');
        valueContainer.classList.add('hotspot-value');
        let unitContainer = document.createElement('div');
        unitContainer.classList.add('hotspot-unit');
        let actualValueText = document.createElement('small');
        actualValueText.classList.add('hotspot-actual-value');

        titleContainer.appendChild(document.createTextNode(hotspot.title));
        valueContainer.appendChild(document.createTextNode(hotspot.value));
        unitContainer.appendChild(document.createTextNode(hotspot.displayedUnit));
        actualValueText.appendChild(document.createTextNode("(valeur actuelle)"));

        completeValueContainer.appendChild(valueContainer);
        completeValueContainer.appendChild(unitContainer);

        wrapper.appendChild(titleContainer);
        wrapper.appendChild(completeValueContainer);
        wrapper.appendChild(actualValueText);

        stopTouchAndScrollEventPropagation(wrapper);

        return wrapper;
    }

    function stopTouchAndScrollEventPropagation(element, eventList) {
        var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
            'wheel', 'mousewheel' ];
        for (var i = 0; i < eventList.length; i++) {
            element.addEventListener(eventList[i], function(event) {
                event.stopPropagation();
            });
        }
    }

    switchScene(scenes[0]);

    console.log('Module Serre chargé!');
})();