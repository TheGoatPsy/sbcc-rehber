# Katkıda Bulunma

`claude-code-for-social-scientists` deposuna katkıda bulunmayı düşündüğünüz için teşekkürler. Bu belge, değişikliklerin nasıl önerileceğini, deponun zorunlu kıldığı iki dilli eşleşme kuralını ve yapay zekâ ifşa beklentilerini açıklar.

İngilizce sürüm için [`CONTRIBUTING.md`](./CONTRIBUTING.md) dosyasına bakınız.

## Hangi tür katkılar bekleniyor

- Herhangi bir broşürdeki olgusal hata, atıf ya da DOI düzeltmeleri.
- Mevcut Türkçe broşürlerin İngilizce çevirisi, mevcut İngilizce broşürlerin Türkçe çevirisi.
- [`CATALOG.md`](./CATALOG.md) içinde planlanan slotlara karşılık önerilen yeni broşürler.
- Sürekli entegrasyon iş akışlarında, belge araç setinde ve ifşa şemasında iyileştirmeler.
- Diğer ülkeler için örneklerin veya bölgesel akademik altyapı referanslarının yerelleştirilmesi (örneğin Yunan HEAL-Link entegrasyonunun ya da Meksika CONACyT'ın ya da Hindistan Shodhganga'nın nasıl kullanılacağına dair bir bölüm).

Sürdürücü katkıları ayda bir kez gözden geçirir, yeni broşür önerilerini ise katalog içine yerleştirir.

## Başlamadan önce

Bir konu (issue) açın ve önerinizi iki ya da üç paragrafta tarif edin. Yeni bir broşür öneriyorsanız önerdiğiniz `KKK-AA-SSSS` kimliğini (uygun kategorideki bir sonraki boş seri), bir paragraf kapsamı ve bir taslak ana hattı eklemeniz gerekir.

Bu adım on beş dakikanızı alır. Karşılığında hem size hem de sürdürücüye uyumsuz iş saatlerini önler.

## İki dilli eşleşme kuralı

Her broşür klasörü `tr.md` ve `en.md` dosyalarını yan yana içerir. `main` dalına yapılan her commit'te bunu zorunlu kılan bir sürekli entegrasyon kontrolü çalışır.

Yalnızca bir dilde katkıda bulunuyorsanız, pull request'iniz yine de incelenir ve bir özellik dalına merge edilebilir. Sürdürücü, dal `main`'e merge edilmeden önce diğer dil sürümünün yazılmasını ayarlar. `main` dalı kısmi iki dilli kapsamı kabul etmez.

Anadili Türkçe olan ve Türkçe sürümü yazıyorsanız önce Türkçe sürümü yazın. İngilizce sürümü sürdürücü ya da başka bir katkı sahibi üstlenir. Tersi de geçerlidir. Çeviri kelime kelime değildir, aynı ana hat üzerinde yeniden yazımdır.

## Yapay zekâ ifşa beklentileri

Taslağında yapay zekâ kullanan her katkı sahibi, dokunduğu broşürün yapay zekâ ifşa frontmatter alanlarını doldurmalıdır. Şema [`AI-AUTHORSHIP.md`](./AI-AUTHORSHIP.md) içinde belgelenir. `template/booklet-template.{tr,en}.md` yolundaki broşür şablon dosyaları, `human_review: "pending"` değeriyle önceden doldurulmuş şemayı içerir. Katkı sahipleri bu şablonu kopyalayıp uyarlayabilir. `main`'e merge etmeden önce `pending` değerini `partial` ya da `complete` olarak güncelleyin. CI, `main` üzerinde hâlâ `pending` taşıyan herhangi bir broşürü reddeder.

Asgari zorunlu alanlar şunlardır.

- `ai_assisted: true` (yapay zekâ kullanıldıysa) ya da `false`.
- `ai_tools` (model sürümleriyle birlikte araç listesi).
- `ai_contribution_level` (`editing-only`, `light-assistance`, `co-drafting`, `substantial-drafting`, `full-draft` değerlerinden biri).
- `human_review` (`complete`, `partial`, `pending` değerlerinden biri).
- `verified_citations_count` ve `fabricated_citations_count`.

`human_review: pending` ile bir broşür ekleyen pull request'ler `main` dalına merge edilmez. Bu durumu CI iş akışı engeller.

## Atıf disiplini

Katkınızdaki her DOI, her yazar adı, her yıl, her sayfa aralığı ve her dergi adı, pull request açmadan önce yetkili bir indekse (Crossref, PubMed, Semantic Scholar, ULAKBIM TR Dizin veya DergiPark) bağımsız olarak doğrulanmalıdır.

Bir atıfı genişletmek için yapay zekâ yardımı aldıysanız, yapay zekânın ilk yanıtı bir adaydır, atıf değildir. Her adayı bir indekse karşı çözün. Yazar ve sürdürücü, atıf uydurmasını sürüm engelleyici bir hata olarak değerlendirir.

## Pull request iş akışı

1. Depoyu GitHub üzerinde forklayın.
2. `main` dalından, broşür kimliği ya da dokunduğunuz alanın adıyla bir özellik dalı oluşturun (örneğin `feat/008-02-0001-test-selection` ya da `fix/catalog-typo`).
3. Değişiklikleri atomik commit'lerle yapın. Uygun olan Conventional Commits ön ekini kullanın (`feat:`, `fix:`, `docs:`, `chore:`, `ci:`, `refactor:`).
4. Yerelde `npx markdownlint-cli2 "**/*.md"` çalıştırarak lint kontrolünü teyit edin.
5. `main`'e karşı pull request açın. Daha önce açtığınız konuya atıfta bulunun.
6. Sürdürücü incelemesine yanıt verin. Asli katkılarda en az bir tur geri bildirim olabilir.
7. Onay sonrası ve iki dilli eşleşme tamamlandığında sürdürücü değişikliği, değişiklik boyutuna göre squash ya da rebase ile merge eder.

## Geliştirici Köken Sertifikası

Katkıda bulunarak, katkının size ait olduğunu ya da deponun lisans şartları altında sunma hakkına sahip olduğunuzu beyan etmiş olursunuz. Geliştirici Köken Sertifikası (DCO) sürüm 1.1 bu beyanı yönetir. Pull request'lerin `Signed-off-by` ile imzalanması zorunlu değildir, ancak zımni DCO her merge edilen değişiklik için geçerlidir.

## Davranış

Tüm etkileşimler [`CODE_OF_CONDUCT.md`](./CODE_OF_CONDUCT.md) tarafından yönetilir. Okuyunuz. Sürdürücü uygular.

## Tanınma

Merge edilen dış katkı sahipleri, katkı türü belirtilerek [`meta/contributors.md`](./meta/contributors.md) içinde listelenir.

## Sorular

Sorunuz burada cevaplanmadıysa, GitHub Discussions etkinleştirildiğinde (v1.5) tartışma açın, bir konu açın ya da sürdürücünün GitHub profilindeki iletişim yüzeyini kullanınız.

---

**Son güncelleme.** 2026-05-19.
