<p align="center">
  <img src="./assets/banner.svg" alt="Claude Code for Social Scientists — Sosyal Bilimciler İçin Claude Code Rehberi banner. Yazar Onour Impram, ORCID 0000-0003-1076-3928, Zenodo concept DOI 10.5281/zenodo.20289687, çift lisans Apache 2.0 ve CC-BY-NC-SA 4.0, v0.1.0-alpha, ECPP Dublin Temmuz 2026.">
</p>

# Sosyal Bilimciler İçin Claude Code Rehberi

Anthropic Claude Code'u araştırmada, eğitimde ve akademik yazımda kullanmak isteyen sosyal bilimciler için iki dilli, açık kaynak bir rehber. İngilizce konuşulan dünyanın dışında çalışan araştırmacılara, içeride çalışanlara da seslenmek üzere, bu araçları gerçek akademik üretim sürecinde kullanan bir klinik psikolog ve doktora adayı tarafından yazılıyor.

> **Durum.** v0.1 iskelet. İlk tam broşür (Booklet 001-01-0001) Türkçe taslak olarak yazıldı. İngilizce taslaklar ve diğer broşürler Phase 1 boyunca eklenecek. Halka açık duyuru, Avrupa Psikoloji Kongresi (ECPP), Dublin, Temmuz 2026 için planlandı.

> **EN readers.** The English version is in [`README.md`](./README.md). Every booklet has a `tr.md` and an `en.md` side by side. A CI check enforces this pairing on every commit.

---

## Rehberin amacı

Bilgisayar bilimi olmayan akademik çalışmada Claude Code kullanımı için kanıta dayalı, pratiğe oturmuş bir el kitabı. Hedef kitle, psikoloji, sosyoloji, eğitim, halk sağlığı, iletişim, siyaset bilimi, antropoloji ve yakın disiplinlerde çalışan araştırmacılar, özellikle Türkiye, Yunanistan, Akdeniz havzası, Ortadoğu, Latin Amerika, Güney ve Güneydoğu Asya, Sahra Altı Afrika gibi İngilizce dışı akademik ekosistemlerde üretim yapan akademisyenler.

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

Türkçe ve İngilizce tam paralel sunulur. Dünya genelinde yaklaşık doksan milyon Türkçe konuşan vardır ve Batı Avrupa'da geniş bir Türk diasporası bulunur. Türkçe akademik yapay zekâ kaynakları talebe göre azdır. İngilizce versiyonun amacı, uluslararası meslektaşların okuyabilmesi, İngilizce dergilerde alıntılanabilmesi, küresel akademik arama motorlarından erişilebilmesi. Her broşür kendi klasöründe `tr.md` ve `en.md` olarak yan yana yaşar. Sürekli entegrasyon kontrolü, bu eşleşmeyi bozan herhangi bir commit'i reddeder.

## Bu rehber kimin için, kimin için değil

Anket çalışması yürüten yardımcı doçent için, sistematik derleme yazan doktora öğrencisi için, R&R hazırlayan doktora sonrası araştırmacı için, müfredat tasarlayan öğretim üyesi için, IRB sürecinde gezinen klinik araştırmacı için. Kod okuyabilen, ancak tek bir paragraf yazmak için bir hafta yeni bir araç zincirini öğrenmek istemeyen insanlar için.

Bir Claude Code başvuru kılavuzu değil. Anthropic kendi belgelerini yayımlıyor. Bir yapay zekâ abartı belgesi değil. Yapay zekânın makalenizi sizin için yazacağı sözünü vermez. Aynı zamanda 2026 yılında yapay zekânın akademik üretimde hiçbir rol oynamadığını da varsaymaz. Konum, akademik yayıncılığın uzlaşı çerçevesi altında (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) ve AB Yapay Zekâ Yasası 2024/1689 şeffaflık yükümlülükleri ile dürüst ortak yazarlıktır.

## Yazarlık ve yapay zekâ ortak yazarlığı

Yazar Onour Impram, Türkiye, Yunanistan ve İrlanda lisanslı klinik psikolog, İstanbul Üniversitesi Klinik ve Sağlık Psikolojisi doktora adayı, Biruni Üniversitesi dış öğretim görevlisi, yapay zekâ ve ruh sağlığı araştırmacısıdır. ORCID. [0000-0003-1076-3928](https://orcid.org/0000-0003-1076-3928).

Claude Code bir taslak ve doğrulama yardımcısı olarak kullanılır. Her broşür, akademik yayıncılığın uzlaşı çerçevesi (COPE 2023, WAME 2023, ICMJE 2024, STM 2025) ile AB Yapay Zekâ Yasası 2024/1689 Madde 50 şeffaflık yükümlülükleri ve ENAI etik kullanım önerileri çerçevesinde katkı düzeyini belirten bir frontmatter bloğu taşır (`ai_assisted`, `model`, `ai_contribution_level`, `human_review`). Tam politika için [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md) dosyasına bakınız.

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
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md            (İngilizce)
├── CONTRIBUTING.tr.md         (Türkçe)
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
│   └── README.md
└── .github/
    └── workflows/
        ├── ci.yml             (markdownlint + iki dilli kapsam)
        ├── citation-check.yml (cff-validator)
        └── secret-scan.yml    (gitleaks)
```

## Kataloglama düzeni

Her broşürün `KKK-AA-SSSS` biçiminde sabit bir kimliği vardır.

- `KKK` üç haneli kategori kodu (001 ile 012 arası).
- `AA` kategori içi iki haneli alt kategori kodu.
- `SSSS` dört haneli sıra numarası.

Örneğin `001-01-0001`, Temeller kategorisinin birinci alt kategorisinin birinci broşürüdür. Tam katalog [`CATALOG.md`](./CATALOG.md) dosyasında yaşar. Yayım sonrası kimlikler değişmez. Broşür ileride revize edilse bile kimlik sabit kalır. Revizyonlar broşürün kendi frontmatter ve değişiklik kaydında tutulur.

## Lisans

Kod ve yapılandırma **Apache License, Version 2.0** kapsamındadır ([`LICENSE.code`](./LICENSE.code)). Broşürler, rehberler, düz yazı ve öğretici içerik **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International** kapsamındadır ([`LICENSE.content`](./LICENSE.content)). Çift lisans modelinin özeti depo kökündeki [`LICENSE`](./LICENSE) dosyasındadır. Düz yazı içeriğinin ticari kullanımı için önceden yazılı izin gerekir. İletişim prosedürü için LICENSE dosyasını okuyunuz.

## Atıf

Bu çalışmayı atıf gösterecekseniz [`CITATION.cff`](./CITATION.cff) dosyasındaki makine okunabilir kaydı veya GitHub üzerindeki "Cite this repository" düğmesini kullanınız. Zenodo concept DOI (en son sürüme çözümlenir) **10.5281/zenodo.20289687**, v0.1.0-alpha sürüm DOI'si **10.5281/zenodo.20289688**. Kanonik kayıt için bkz. <https://doi.org/10.5281/zenodo.20289687>.

## Uluslararası koruma

Bu çalışma şu kanallarla kayıt altına alınmıştır.

- Her sürümde kalıcı DOI için **Zenodo** (CERN).
- Kalıcı kod arşivi için **Software Heritage Archive** (CERN/Inria).
- 180'den fazla Bern Sözleşmesi üyesi ülkede uygulanabilir kanıtsal tescil için **A.B.D. Telif Hakkı Ofisi (eCO)**.
- Makine okunabilir lisans bildirimi için **Creative Commons** üst veri.

## Yol haritası

Halka açık faz planı için [`meta/roadmap.md`](./meta/roadmap.md) dosyasına bakınız. Ana hedefler. v0.1 (iskelet ve ilk broşür, 2026-05). v1.0 (otuz broşür, ECPP Dublin için 2026-07). v1.5 (topluluk tartışmaları açık, elli broşür, 2026-10). v2.0 (yetmişten fazla broşür, canlı laboratuvar, konferans atıfları, eğitim materyali kullanımı, 2027-04).

## Katkıda bulunma

Yapay zekânın İngilizce dışı akademik ekosistemlere nasıl indiğini önemseyen sosyal bilim araştırmacıları, klinisyenler, eğitim tasarımcıları, kütüphaneciler ve mühendislerin katkıları beklenir. Pull request iş akışı, iki dilli eşleşme kuralı ve ifşa beklentileri için [`CONTRIBUTING.tr.md`](./CONTRIBUTING.tr.md) dosyasını okuyunuz.

## Teşekkürler

İki referans depo, erken yapısal düşünceyi etkilemiştir. Bu rehber, kapsam, kitle ve disiplin bakımından her ikisinden de ayrıştı. Yine de borç vardır.

- [Galaxy-Dawn/claude-scholar](https://github.com/Galaxy-Dawn/claude-scholar) (MIT). Üç dilli, yapay zekâ ve makine öğrenmesine yaslanan bir araştırmacı yardımcısı beceri demeti.
- [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) (CC-BY-NC 4.0). Yapılandırılmış üçgenleme boru hattı (Semantic Scholar, OpenAlex, Crossref) ve Material Passport kalıbı.

Seçilmiş fikirler Türkçe ve sosyal bilim bağlamına uyarlandı. Farklar ve tasarım kararları yazarın çalışma notlarında belgelenmiştir.

## İletişim

Onour Impram. `onuribram@outlook.com`. İstanbul, Türkiye / Komotini, Yunanistan.
