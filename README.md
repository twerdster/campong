# CamPong

<p align="center">
  <img src="assets/project-preview.jpg" alt="A player's hand beside a projected Pong paddle and ball on a wall, with the projecting phone in the foreground" width="300">
</p>

![Platform: Android (Samsung Galaxy Beam)](https://img.shields.io/badge/platform-Android%20%28Galaxy%20Beam%29-lightgrey)
![Documents: 8-page report](https://img.shields.io/badge/documents-8--page%20report-informational)
![Source: not recovered](https://img.shields.io/badge/source-not%20recovered-lightgrey)

A historical camera/projector Pong prototype in which hand positions control projected paddles.

Students: Rom Herschkovitz, Nofar Carmeli.

Supervision: Aaron Wetzler.

## Available materials

The [eight-page report](docs/report.pdf), dated October 27, 2013, describes a two-player Pong game projected onto a flat surface by a Samsung Galaxy Beam. A prism places the projection in the camera's field of view. Camera images of the players' hands are used to update the two paddle positions.

The report separates the game engine, image-processing engine and game view. Initialization locates two projected stripes using thresholding, morphological opening and histograms. During play, the described pipeline median-filters the image, compares the stripe regions with saved backgrounds, and uses a histogram median as the hand position. These details come from the report; no matching application source or executable has been recovered for this repository.

## Use and validation

Read the report for the algorithm and historical screenshots. The historical demo link is listed below. There is no software to install or run here. The report names Android, Eclipse and OpenCV but does not establish exact Android/OpenCV versions or a reproducible build procedure.

The report describes the original prototype. The video link is retained as a historical reference and has not been reviewed during this revision. No build, camera/projector test, tracking-accuracy evaluation or latency benchmark was performed during recovery. The photograph above shows the historical setup; it is not a new validation result.

## Links

- [Project entry on Aaron Wetzler's website](https://twerdster.github.io/#campong)
- [Original report](docs/report.pdf)
- [Project page](https://gip.cs.technion.ac.il/last-projects-2013-1.html)
- [Historical demo link (not reviewed)](https://www.dropbox.com/s/i8cxxujm43ah5kh/Pong.mov)

## Attribution and reuse

The credits above follow the archived project page. No license for unrecovered source code is implied by this README. Original authors can open an issue to contribute updates or request corrections or removal of their material.

Figure provenance: `assets/project-preview.jpg` is the original student-project photograph from the archived project page on Aaron Wetzler's website, copied without modification.
