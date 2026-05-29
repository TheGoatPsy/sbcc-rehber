<p align="center">
  <img src="./assets/banner.svg" alt="Claude Code for Social Scientists — Sosyal Bilimciler İçin Claude Code Rehberi banner. Yazar Onour Impram, ORCID 0000-0003-1076-3928, Zenodo concept DOI 10.5281/zenodo.20289687, çift lisans Apache 2.0 ve CC-BY-NC-SA 4.0, v2.1.0.">
</p>

# Sosyal Bilimciler İçin Claude Code Rehberi

Anthropic Claude Code'u araştırmada, eğitimde ve akademik yazımda kullanmak isteyen sosyal bilimciler için iki dilli, açık kaynak bir rehber. İngilizce konuşulan dünyanın dışında çalışan araştırmacılara, içeride çalışanlara da seslenmek üzere, bu araçları gerçek akademik üretim sürecinde kullanan bir klinik psikolog ve doktora adayı tarafından yazılıyor.

> **Durum.** v2.1.0 release. On iki yayınlanmış broşür Türkçe ve İngilizce tamamlandı, insan incelemesinden geçti ve atıf denetimi yapıldı. Ayrıca broşürleri yeniden kullanılabilir iş akışlarına çeviren on companion Claude Code project skill bulunur. v2.1.0, ilk Veri Analizi broşürünü (Yeniden Üretilebilir Nicel İş Akışları) ekler. Gerekçe, nicel veri analizinin coding agent kullanımının baskın sosyal bilim kullanımı olduğunu gösteren anket kanıtıdır. Skills, pip (`social-cc-plugin`) ya da Claude Code eklentisi olarak kurulur.

> **EN readers.** The English version is in [`README.md`](./README.md). Every booklet has a `tr.md` and an `en.md` side by side. A CI check enforces this pairing on every commit.

---

## Rehberin amacı

Bilgisayar bilimi olmayan akademik çalışmada Claude Code kullanımı için kanıta dayalı, pratiğe oturmuş bir el kitabı. Hedef kitle, psikoloji, sosyoloji, eğitim, halk sağlığı, iletişim, siyaset bilimi, antropoloji ve yakın disiplinlerde çalışan araştırmacılardır. Her broşür Türkçe ve İngilizce tam paralel sunulur.

Rehber, sosyal bilimcinin gerçekte karşılaştığı soruları on iki tematik kategoride ele alır.

1. **Temeller.** Claude Code nedir, sohbet penceresinden nasıl ayrılır, akademik üretimde nerede iş görür.
2. **Akademik erişim.** PubMed ve Semantic Scholar MCP'leri, EZproxy ve kurumsal VPN gerçekleri, ORCID, Zotero, DergiPark, ULAKBIM TR Dizin, HEAL-Link.
3. **Hafıza sistemleri.** Uzun ömürlü kasalar (vault), sürekli bağlam, on yıllık not arşivinde gezinme, Memory-as-Vault mühendislik kalıbı.
4. **Kasa mimarisi.** Klasör disiplini, MOC (Map of Content) haritaları, yazılım değişikliklerinden bağımsız kalıcı Markdown alışkanlıkları.
5. **Hook'lar ve otomasyon.** Oturum yaşam döngüsü olayları, ritüel hook'ları, kişisel bilgi tabanı için hafif sürekli entegrasyon.
6. **MCP ve eklentiler.** Akademik iş akışları için Model Context Protocol sunucularını yazma, denetleme, küratörlük etme.
7. **Akademik yazım.** Türkçe ve İngilizce IMRAD iskeleti, DOI disiplini ile APA 7, dergi uyumu, makale revizyonu.
8. **Veri analizi.** Yeniden üretilebilir iş akışları, istatistiksel test seçimi, nitel kodlama, karma yöntem disiplini.
9. **Etik ve IRB.** Helsinki Bildirgesi, COPE, WAME, ICMJE, STM 2025, AB Yapay Zekâ Yasası 2024/1689 Madde 50, ENAI, KVKK ve GDPR.
10. **Hakem değerlendirmesi.** Geri dönüş mektupları, izlenebilirlik matrisi, hakem yanıt disiplini, AI iz silme yazımı.
11. **Konferans sunumu.** Slayt, poster, lightning talk, ağ kurma protokolleri.
12. **Sorun giderme.** Araç çalışmadığında, çalışmalar çeliştiğinde, hakem yanlış soru sorduğunda.

Her broşür kısa, görüş bildiren, yazarın kendi akademik pratiğinde sınanmış bir metindir.

## İki dilli neden

Türkçe ve İngilizce tam paralel sunulur. Dünya genelinde yaklaşık doksan milyon Türkçe konuşan vardır ve Batı Avrupa'da geniş bir Türk diasporası bulunur. Türkçe akademik yapay zekâ kaynakları talebe göre azdır. Bu boşluk rastlantı değildir. Sosyal bilimde coding agent kullanımına dair 2026 tarihli büyük ölçekli bir tarama, ABD ve Kanada'daki araştırmacıları örnekler ve benimsemenin kariyer aşaması, cinsiyet ve kurum prestiji ekseninde eğik olduğunu bulur ([Anthropic, 2026](https://www.anthropic.com/research/coding-agents-social-sciences)). Bu çerçevenin dışından tam paralel yazılmış bir rehber, erişimi genişletmenin somut bir yoludur. İngilizce versiyonun amacı, uluslararası meslektaşların okuyabilmesi, İngilizce dergilerde alıntılanabilmesi, küresel akademik arama motorlarından erişilebilmesi. Her broşür kendi klasöründe `tr.md` ve `en.md` olarak yan yana yaşar. Sürekli entegrasyon kontrolü, bu eşleşmeyi bozan herhangi bir commit'i reddeder.

## Bu rehber kimin için, kimin için değil

Anket çalışması yürüten yardımcı doçent için, sistematik derleme yazan doktora öğrencisi için, R&R hazırlayan doktora sonrası araştırmacı için, müfredat tasarlayan öğretim üyesi için, IRB sürecinde gezinen klinik araştırmacı için. Kod okuyabilen, ancak tek bir paragraf yazmak için bir hafta yeni bir araç zincirini öğrenmek istemeyen insanlar için.

Bir Claude Code başvuru kılavuzu değil. Anthropic kendi belgelerini yayımlıyor. Bir yapay zekâ abartı belgesi değil. Yapay zekânın makalenizi sizin için yazacağı sözünü vermez. Aynı zamanda 2026 yılında yapay zekânın akademik üretimde hiçbir rol oynamadığını da varsaymaz. Konum, akademik yayıncılığın uzlaşı çerçevesi altında (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) ve AB Yapay Zekâ Yasası 2024/1689 şeffaflık yükümlülükleri ile dürüst ortak yazarlıktır.

## Yazarlık ve yapay zekâ ortak yazarlığı

Yazar Onour Impram, Türkiye, Yunanistan ve İrlanda lisanslı klinik psikolog, İstanbul Üniversitesi Klinik ve Sağlık Psikolojisi doktora adayı, Biruni Üniversitesi dış öğretim görevlisi, yapay zekâ ve ruh sağlığı araştırmacısıdır. ORCID. [0000-0003-1076-3928](https://orcid.org/0000-0003-1076-3928).

Claude Code bir taslak ve doğrulama yardımcısı olarak kullanılır. Her broşür, akademik yayıncılığın uzlaşı çerçevesi (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) ile AB Yapay Zekâ Yasası 2024/1689 Madde 50 şeffaflık yükümlülükleri ve ENAI etik kullanım önerileri çerçevesinde katkı düzeyini belirten bir frontmatter bloğu taşır (`ai_assisted`, `ai_tools.model_alias`, `ai_tools.model_dated`, `ai_contribution_level`, `human_review`). Tam politika için [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md) dosyasına bakınız.

## Depo düzeni

```
claude-code-for-social-scientists/
├── README.md                  (İngilizce ana belge)
├── README.tr.md               (bu dosya)
├── LICENSE                    (çift lisans başlığı)
├── LICENSE.code               (Apache 2.0 tam metni)
├── LICENSE.content            (CC-BY-NC-SA 4.0 tam metni)
├── CITATION.cff               (Zenodo concept DOI: 10.5281/zenodo.20289687)
├── AI-AUTHORSHIP.md           (ifşa politikası)
├── CATALOG.md                 (planlanan ve taslak haldeki tüm broşürlerin kataloğu)
├── package.json               (yerel lint ve doğrulama komutları)
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md            (İngilizce)
├── CONTRIBUTING.tr.md         (Türkçe)
├── .claude/
│   └── skills/                (Claude Code project skills)
├── booklets/
│   ├── 001-foundations/
│   ├── 002-academic-access/
│   ├── ... (012 kategori)
├── template/                  (broşür başlangıç şablonları)
├── meta/
│   ├── roadmap.md
│   ├── contributors.md
│   └── ai-disclosure.md
├── scripts/
│   ├── README.md
│   └── validate-repo.mjs
└── .github/
    └── workflows/
        ├── ci.yml             (markdownlint + repo bütünlüğü doğrulaması)
        ├── citation-check.yml (cff-validator)
        └── secret-scan.yml    (gitleaks)
```

## Kataloglama düzeni

Her broşürün `KKK-AA-SSSS` biçiminde sabit bir kimliği vardır.

- `KKK` üç haneli kategori kodu (001 ile 012 arası).
- `AA` kategori içi iki haneli alt kategori kodu.
- `SSSS` dört haneli sıra numarası.

Örneğin `001-01-0001`, Temeller kategorisinin birinci alt kategorisinin birinci broşürüdür. Tam katalog [`CATALOG.md`](./CATALOG.md) dosyasında yaşar. Yayım sonrası kimlikler değişmez. Broşür ileride revize edilse bile kimlik sabit kalır. Revizyonlar broşürün kendi frontmatter ve değişiklik kaydında tutulur.

## Project Skills

v2.1.0 yüzeyi [`.claude/skills/`](./.claude/skills/) altında on Claude Code project skill içerir. Broşürler teori, pedagoji ve akademik çerçeveyi taşır. Skills katmanı tekrar edilebilir iş akışlarını, denetim listelerini ve güvenli çalışma sınırlarını taşır.

| Skill | Tamamlayıcı broşürler | Amaç |
|---|---|---|
| `social-science-literature-triage` | 002, 007 | Literatür taraması başlamadan önce veri tabanı seçimi, dil katmanı, DOI durumu ve dahil etme ölçütlerini yapılandırır. |
| `apa-doi-verifier` | 007 | APA 7 kaynakçayı temizler, DOI metadata doğrulaması yapar ve uydurma atıf riskini sınıflar. |
| `bilingual-booklet-pairing` | tüm broşür çiftleri | `tr.md` ve `en.md` paritesini, frontmatter uyumunu, başlıkları ve kültürel adaptasyon notlarını denetler. |
| `ai-disclosure-auditor` | tüm broşür çiftleri | AI katkı alanlarını, insan incelemesini, atıf sayılarını, model metadata alanlarını ve disclosure standardını denetler. |
| `ethics-irb-ai-protocol` | 009 | Etik kurul, KVKK, GDPR, EU AI Act, ifşa ve veri minimizasyonu kontrol listesi üretir. |
| `rebuttal-traceability-matrix` | 010 | Hakem yorumlarını yanıt kategorilerine, manuscript değişiklik haritasına ve editör yanıt taslağına çevirir. |
| `memory-vault-architect` | 003, 004 | Araştırma vault klasörleri, MOC yapısı, frontmatter, kaynak pasaportu ve retrieval pattern tasarlar. |
| `regional-access-workflow` | 002 | DergiPark, ULAKBIM TR Dizin, HEAL-Link, YOK Thesis Center, VPN ve kütüphane yollarıyla yasal erişim akışı kurar. |
| `agentic-session-debugger` | 012 | Claude Code scope drift, loop trap, hidden state, context limit, PATH ve izin problemlerini teşhis eder. |
| `repo-release-integrity-check` | tüm repo | Release öncesi README, katalog, changelog, citation dosyaları, Zenodo DOI, release notes, AI disclosure ve booklet metadata uyumunu kontrol eder. |

### Skills kurulumu

Skills iki yolla dağıtılır ve ikisi de aynı `.claude/skills/` kaynağından okur.

- **pip.** `pip install social-cc-plugin` çalıştırın, ardından `social-cc install` ile skills'i Claude yapılandırmanıza kopyalayın. Geçerli projenin `.claude/skills/` dizinine yazmak için `social-cc install --project`, paketteki skills'i listelemek için `social-cc list` kullanın.
- **Claude Code eklentisi.** Depoyu Claude Code eklenti sistemiyle kurun. [`.claude-plugin/plugin.json`](./.claude-plugin/plugin.json) manifesti aynı skills'i sunar.

Installer kodu Apache 2.0'dır. Kopyalanan skill içeriği CC-BY-NC-SA 4.0 altında kalır, dolayısıyla düz yazı için ticari olmayan kullanım ve atıf koşulları geçerlidir. Bkz. [Lisans](#lisans).

## Lisans

Kod ve yapılandırma **Apache License, Version 2.0** kapsamındadır ([`LICENSE.code`](./LICENSE.code)). Broşürler, rehberler, düz yazı ve öğretici içerik **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** kapsamındadır ([`LICENSE.content`](./LICENSE.content)). Çift lisans modelinin özeti depo kökündeki [`LICENSE`](./LICENSE) dosyasındadır. Düz yazı içeriğinin ticari kullanımı için önceden yazılı izin gerekir. İletişim prosedürü için LICENSE dosyasını okuyunuz.

## Atıf

Bu çalışmayı atıf gösterecekseniz [`CITATION.cff`](./CITATION.cff) dosyasındaki makine okunabilir kaydı veya GitHub üzerindeki "Cite this repository" düğmesini kullanınız. Zenodo concept DOI (en son sürüme çözümlenir) **10.5281/zenodo.20289687**. Kanonik kayıt için bkz. <https://doi.org/10.5281/zenodo.20289687>. Zenodo her version DOI'yi GitHub release yayımlandıktan sonra üretir. Bu nedenle immutable tag arşivleri concept DOI ve daha önce bilinen version DOI'leri içerebilir, yeni üretilen version DOI metadata'sı Zenodo kaydı oluşunca `main` üzerinde kaydedilir.

## Uluslararası koruma

Bu çalışma şu kanallarla kayıt altına alınmıştır.

- Her sürümde kalıcı DOI için **Zenodo** (CERN).
- Kalıcı kod arşivi için **Software Heritage Archive** (CERN/Inria).
- 180'den fazla Bern Sözleşmesi üyesi ülkede uygulanabilir kanıtsal tescil için **A.B.D. Telif Hakkı Ofisi (eCO)**.
- Makine okunabilir lisans bildirimi için **Creative Commons** üst veri.

## Yol haritası

Halka açık faz planı için [`meta/roadmap.md`](./meta/roadmap.md) dosyasına bakınız. Mevcut sürüm v2.1.0. v2.0.0'a kadar yayınlanan on bir broşür ve on companion project skill üzerine ilk Veri Analizi broşürünü (Yeniden Üretilebilir Nicel İş Akışları) ekler. Tam otuz broşürlük katalog, canlı laboratuvar, konferans atıfları ve eğitim materyali kullanımını içeren sonraki büyük kilometre taşı v3.0 için hedeflenmektedir.

## Katkıda bulunma

Yapay zekânın İngilizce dışı akademik ekosistemlere nasıl indiğini önemseyen sosyal bilim araştırmacıları, klinisyenler, eğitim tasarımcıları, kütüphaneciler ve mühendislerin katkıları beklenir. Pull request iş akışı, iki dilli eşleşme kuralı ve ifşa beklentileri için [`CONTRIBUTING.tr.md`](./CONTRIBUTING.tr.md) dosyasını okuyunuz.

## İletişim

Onour Impram. İstanbul, Türkiye / Komotini, Yunanistan. Proje koordinasyonu için GitHub issues, discussions veya sürdürücünün GitHub profilindeki iletişim yüzeyini kullanınız.
