# Existing Website Findings

Source pages reviewed: `index_e.html` and `info.html` from the current Winters Chapel Kindergarten website.

## English homepage content

The current English homepage identifies the site as **WINTERS CHAPEL KINDERGARTEN & DAY CARE CENTER ATLANTA** and states that **Winters Chapel Kindergarten & Day Care Center helps raise bilingual children in Atlanta, Ga.** The content describes the school as a multicultural kindergarten educating children in both Japanese and English. It notes that classes for 1- to 3-year-olds include English instruction by an American teacher and Japanese instruction by a Japanese teacher, while the Pre-K class for 4-year-olds is taught entirely in English. Operating hours are listed as **7:30 am – 6:30 pm**.

The homepage lists these programs and capacities: 1–2 years old class, capacity 8; 2–3 years old class, capacity 15; 3–4 years old class, capacity 19; Georgia Pre-Kindergarten class, capacity 22; After School Program for ages 5–12 from 3:30 pm–6:30 pm, capacity 22; and Summer School Program. It also states that the center is sanctioned by the Georgia Department of Early Care and Learning, operated by SHIRASAGI INTERNATIONAL CORPORATION, with President Kunitoshi Arai.

Contact details on the existing homepage are: **4942 Winters Chapel Rd., Doraville, GA 30360** and **770-394-3242**.

## Visual observations

The existing English homepage uses real school imagery, including an exterior building photo and a Georgia Pre-Kindergarten program sign. The visual identity includes Japanese and English header text and language links for Japanese, English, and Chinese.

## Japanese information page observations

The Japanese information page is visually sparse and includes a notice stating that the school received a **Quality Rated** designation among Georgia schools with strong educational content and facilities. This supports the redesigned site's Quality & Credentials section.

## Language navigation

The existing website provides top-right language links for Japanese, English, and Chinese. The redesign should preserve this behavior with accessible buttons or tabs that change page copy accordingly.

## Design implication

The redesigned site should use real facility/center photos where available, retain the bilingual/multilingual identity, and make licensing, Quality Rated status, and contact information much clearer and more trustworthy than the current table-based layout.

## Gallery page observations

The English gallery page at `gallery_e.html` preserves the same title image and language/navigation structure. Markdown extraction only surfaced the page heading and navigation, suggesting much of the gallery may be table/image-based or otherwise not fully captured as article text. Because shared project files already include real gallery-style assets named `xmas`, `xmas2018`, `japanfest2005`, `christmas01`, and `summerschool2019`, these should be prioritized for the redesigned Gallery and Annual Events sections.

## Local shared image inventory

The project shared folder contains 17 real center-related images: class pictures, art project classroom, Christmas images, Japan Fest, classroom lineup, lunch classroom photos, playground, summer school, teacher photos, exterior/school images, and additional winter/gallery images. These align with the user’s request to avoid generic stock photos.

## Visual asset selection from shared photos

The contact sheet confirms that the available photos are real center-related assets and cover the required site sections. The strongest homepage trust image is `wint1.jpg`, showing the school exterior and van. Strong classroom/program images include `lineupclassroom.jpg`, `lunchtimeclassroom2.jpg`, `lunchtimeclassroom3.jpg`, `lunchtimeclassroom4.jpg`, and `artprojectclassroom.jpg`. Outdoor/play imagery is represented by `playground1.jpeg`. Teacher content can use `teacher2023.jpg` and `teacher2023-9.jpg`. Annual events and gallery content can use `japanfest2005.jpg`, `christmas01.jpg`, `xmas.jpeg`, `xmas2018.jpg`, `summerschool2019.jpg`, `20160627classpictures.jpg`, and `wint2.jpg`.

Because the user requested real school photos rather than stock imagery, these real shared images should carry the photography-heavy sections. Generated visual assets, if used, should be limited to abstract supportive design motifs such as soft paper textures or decorative classroom shapes, not fabricated photos of children.

## Preview QA observations

The development preview loads the redesigned one-page site with the selected warm paper-texture visual system, real school exterior and classroom imagery in the hero, and visible primary navigation. The English language loads by default, and the Japanese language button successfully changes navigation, headline, body text, and calls to action without leaving the page. The large display type is intentionally editorial and high-contrast against the light generated background; text remains dark on the high-key hero asset according to contrast guidance. The preview confirms that major sections appear in the extracted page text, including Programs, Curriculum, Events, Quality, Classroom, Teachers, Gallery, and Contact.

## Responsive refinement verification

After the bilingual header text was added, the standard preview width showed crowding in the top navigation. The header was refined so full navigation and language buttons only appear on very wide screens, while standard desktop, tablet, and mobile widths use a compact menu button. The responsive menu was tested in preview and displays all navigation links plus English, Japanese, and Chinese language controls in a stacked accessible layout. The hero title and affected headings now render ampersands using a clearer sans-serif override instead of the decorative display ampersand.

## Latest uploaded image verification

The newly uploaded `lunchtimeclassroom4.jpg` and `playtimeclassroom.jpg` files were uploaded to web storage without re-opening the attached images. The preview text confirms the updated trust statement reads **Diverse classrooms, caring teachers** in the trust list. The curriculum preview shows the newly provided lunchtime classroom image in the Curriculum & Philosophy section. The classroom section text confirms the first classroom gallery item now reads **Playtime classroom and group learning**, mapped to the newly uploaded playtime classroom asset. The hero overlap was adjusted to keep the requested layered look while reducing right-edge clipping at preview widths.
