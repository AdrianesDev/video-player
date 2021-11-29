        const $video = document.querySelector('video');
        const $play = document.querySelector('#play');
        const $pause = document.querySelector('#pause');
        const $backward = document.querySelector('#backward');
        const $forward = document.querySelector('#forward');
        const $progress = document.querySelector('#progress');


        $play.addEventListener('click',handlePlay);
        $pause.addEventListener('click',handlePause);


        function handlePlay(){
            $video.play();
            $play.hidden = true;
            $pause.hidden = false;
            console.log('se esta reproduciendo');
        }

        function handlePause(){
            $video.pause();
            $play.hidden = false;
            $pause.hidden = true;
            console.log('se esta pausando');
        }

        $backward.addEventListener('click',handleBackward);
        
        function handleBackward(){
            $video.currentTime = $video.currentTime - 10;
            console.log('-10 segundos',$video.currentTime);
        }
        
        $forward.addEventListener('click',handleForward);
        function handleForward(){
            $video.currentTime = $video.currentTime + 10;
            console.log('+10 segundos',$video.currentTime);
        }

        $video.addEventListener('loadedmetadata',handleLoaded);
        $video.addEventListener('timeupdate',handleTimeUpdate);


        function handleLoaded(){
            $progress.max = $video.duration;
            console.log('ha cargado mi video',$video.duration);
        }

        function handleTimeUpdate(){
            $progress.value = $video.currentTime;
            //console.log($video.currentTime);
        }

        $progress.addEventListener('input',handleImput);

        function handleImput(){
            $video.currentTime = $progress.value;
            console.log($progress.value);
        }