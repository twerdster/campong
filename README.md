# CamPong

<p align="center">
  <img src="assets/project-preview.jpg" alt="A player's hand beside a projected Pong paddle and ball on a wall, with the projecting phone in the foreground" width="300">
</p>

![Platform: Android (Samsung Galaxy Beam)](https://img.shields.io/badge/platform-Android%20%28Galaxy%20Beam%29-lightgrey)
![Documents: report, poster, slides, overview](https://img.shields.io/badge/documents-report%2C%20poster%2C%20slides%2C%20overview-informational)
![Source: not recovered](https://img.shields.io/badge/source-not%20recovered-lightgrey)

A historical camera/projector Pong prototype in which hand positions control projected paddles.

Students: Rom Herschkovitz, [Nofar Carmeli](https://nofar.carme.li/).

Supervision: Aaron Wetzler.

## Available materials

The [eight-page report](docs/report.pdf), dated October 27, 2013, describes a two-player Pong game projected onto a flat surface by a Samsung Galaxy Beam. A prism places the projection in the camera's field of view. Camera images of the players' hands are used to update the two paddle positions.

The report separates the game engine, image-processing engine and game view. Initialization locates two projected stripes using thresholding, morphological opening and histograms. During play, the described pipeline median-filters the image, compares the stripe regions with saved backgrounds, and uses a histogram median as the hand position. These details come from the report; no matching application source or executable has been recovered for this repository.

On 2026-11-13, Nofar Carmeli supplied a [poster](original/CamPong-Poster.pptx), a [15-slide presentation](original/CamPong-Presentation.pptx), a [project overview](original/CamPong-IMVC.docx) and a [YouTube video link](https://www.youtube.com/watch?v=msWkridhFyQ). The report in that collection is byte-identical to the report already archived here. The presentation contains an embedded historical gameplay video. The three new files are preserved unchanged; [PROVENANCE.md](PROVENANCE.md) records their hashes and review scope. The collection contains no application source. The overview's supplied filename contains "IMVC"; this archive does not establish a conference submission or publication.

## Use and validation

Read the report and supplied documents for the algorithm, system layout and historical screenshots. Open the PPTX/DOCX files in a compatible presentation or document reader; embedded-video playback depends on the reader's WMV support. There is no software to install or run here. The report names Android, Eclipse and OpenCV but does not establish exact Android/OpenCV versions or a reproducible build procedure.

The documents describe the historical prototype. The supplied YouTube video was identified by its title metadata; its content was not reviewed. Document inspection and viewing sampled frames of the embedded recording do not reproduce its operation. No build, camera/projector test, tracking-accuracy evaluation or latency benchmark was performed during recovery. The photograph above shows the historical setup; it is not a new validation result.

## Links

- [Project entry on Aaron Wetzler's website](https://twerdster.github.io/#campong)
- [Original report](docs/report.pdf)
- [Poster](original/CamPong-Poster.pptx)
- [Presentation with embedded gameplay video](original/CamPong-Presentation.pptx)
- [Project overview](original/CamPong-IMVC.docx)
- [Video supplied by Nofar Carmeli](https://www.youtube.com/watch?v=msWkridhFyQ)
- [Project page](https://gip.cs.technion.ac.il/last-projects-2013-1.html)
- [Earlier Dropbox video link (availability not rechecked)](https://www.dropbox.com/s/i8cxxujm43ah5kh/Pong.mov)

## Attribution and reuse

Names follow the archived project page; Nofar Carmeli's profile link is the website she supplied. On 2026-11-13, Nofar Carmeli confirmed that Aaron Wetzler could keep and publish the project materials and supplied her preferred website. This records her response only and adds no repository-wide software license. The original documents retain their authorship and any third-party terms. No license for unrecovered source code is implied by this README. Original authors can open an issue to contribute updates or request corrections or removal of their material.

Figure provenance: `assets/project-preview.jpg` is the original student-project photograph from the archived project page on Aaron Wetzler's website, copied without modification.
