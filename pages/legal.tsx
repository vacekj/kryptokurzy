import {
	Container,
	Text,
	Heading,
	VStack,
	UnorderedList,
	ListItem,
	Divider,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Showcase() {
	return (
		<>
			<NextSeo
				title="Zásady ochrany osobních údajů - KryptoKurzy.cz"
				description="KryptoKurzy.cz je Váš ověřený zdroj informací o kryptoměnách, decentralizovaných financích a novinek ze světa crypta"
			/>
			<Navbar />
			<Container maxW={"3xl"} as={VStack} alignItems={"start"} my={10}>
				<Heading id={"osobni-udaje"} as={"h1"}>
					Zásady ochrany osobních údajů
				</Heading>
				<Text>
					Ochranu osobních údajů nebereme na lehkou váhu. V
					následujícím dokumentu vás informujeme, jaké osobní údaje
					zpracováváme, proč je zpracováváme, na jak dlouho a jaká
					jsou vaše práva.
					<Heading mt={4} as={"h2"}>
						Kdo je správce?
					</Heading>
					Správce osobních údajů na webu https://kryptokurzy.cz a v
					mobilní aplikaci KryptoKurzy je Josef Vacek. Kontakt -
					josef@kryptokurzy.cz, tel.: 605 98 11 66.
					<Heading mt={4} as={"h2"}>
						Kdy zpracováváme vaše osobní údaje?
					</Heading>
					Vaše osobní údaje zpracováváme v případě odeslání
					kontaktního formuláře, přihlášení k odběru newsletteru a
					registrace na webu ve smyslu nařízení Evropského parlamentu
					a Rady (EU) č. 2016/679 o ochraně fyzických osob v
					souvislosti se zpracováním osobních údajů a o volném pohybu
					těchto údajů a o zrušení směrnice 95/46/ES (obecné nařízení
					o ochraně osobních údajů) (dále jen „Nařízení“). V případě
					odeslání kontaktního formuláře zpracováváme tyto osobní
					údaje:{" "}
					<UnorderedList my={3}>
						<ListItem>E-mailovou adresu </ListItem>
						<ListItem>Jméno a příjmení</ListItem>
						<ListItem>Text zprávy</ListItem>
					</UnorderedList>
					Tyto osobní údaje je nutné zpracovat pro vytvoření nabídky
					služeb, jednání o této nabídce, dodání zboží nebo za účelem
					odpovědi na Vámi vznesený dotaz. Takové zpracování umožňuje
					čl. 6. odst. 1 písm. b) Nařízení. Tyto osobní údaje budou
					Správcem zpracovávány po dobu jednání o uzavření smlouvy a
					po dobu trvání smlouvy, nejdéle 1 rok od vaší poptávky nebo
					od ukončení smlouv, pokud neudělíte souhlas k dalšímu
					zpracování. V případě přihlášení k odběru newsletterů
					zpracováváme tento osobní údaj:{" "}
					<UnorderedList my={3}>
						<ListItem>E-mailovou adresu</ListItem>
					</UnorderedList>
					Tento osobní údaj zpracováváme za účelem zasílání obchodních
					sdělení. E-mail zpracováváme po dobu 5 let. Obchodní sdělení
					vám zasíláme na základě uděleného souhlasu. Ze zasílání
					obchodních sdělení je možné se kdykoli jednoduše odhlásit.
					Takové zpracování umožňuje čl. 6. odst. 1 písm. a) Nařízení.{" "}
					<Heading mt={4} as={"h2"}>
						Kdo další může mít přístup k vašim osobním údajům?
					</Heading>
					s Správce spolupracuje s dalšími subjekty (zpracovatelé),
					kteří mohou mít přístup k vašim osobním údajům. Přístup k
					vašim osobním údajům mohou mít i tito zpracovatelé:
					<UnorderedList my={3}>
						<ListItem>E-mailingový nástroj MailChimp</ListItem>
						<ListItem>CRM systém Hubspot</ListItem>
					</UnorderedList>
					<Heading mt={4} as={"h2"}>
						Jaká jsou vaše práva?
					</Heading>{" "}
					Vezměte na vědomí, že podle zákona o ochraně osobních údajů
					máte právo: požadovat po nás informaci, jaké vaše osobní
					údaje zpracováváme, případné žádat kopii těchto osobních
					údajů, požadovat po nás vysvětlení ohledně zpracování
					osobních údajů, vyžádat si u nás přístup k těmto údajům a
					tyto nechat aktualizovat nebo opravit, požadovat po nás
					výmaz těchto osobních údajů – tento výmaz však bude mít za
					následek ukončení jednání o smlouvě a bude proveden jen v
					případě, že zájmy společných správců nepřevažují nad vaší
					ochranou soukromí, v případě pochybností o dodržování
					povinností souvisejících se zpracováním osobních údajů
					obrátit se na nás nebo na Úřad pro ochranu osobních údajů,
					případně na soud.
				</Text>
				<Divider />
				<Heading id={"disclaimer"} as={"h1"}>
					Prohlášení o vyloučení odpovědnosti
				</Heading>

				<Text>
					<div>
						<p>
							Toto prohlášení se vztahuje na všechny přístupy na
							tyto webové stránky a na veškeré využití těchto
							stránek a jejich obsahu, včetně využití mobilní
							aplikace příslušné k této webové stránce, dále jen
							"webové stránky"
						</p>
						<p>
							Přístupem na naše webové stránky nebo instalací toto
							prohlášení berete na vědomí a souhlasíte s ním.
						</p>
						<p>
							<strong>
								Tyto webové stránky neobsahují rady ani
								doporučení
							</strong>
							<br />
							Na našich webových stránkách Vám neposkytujeme rady
							ani doporučení žádného druhu a neměli byste na
							jejich základě činit žádná rozhodnutí ani kroky. Co
							se jednotlivých informací obsažených na těchto
							webových stránkách tyče, je vhodné konzultovat
							odborníka na danou oblast.
						</p>
						<p>
							<strong>
								Informace jsou poskytované „tak, jak jsou“
							</strong>
							<br />
							Kryptokurzy vyvíjí veškeré úsilí, aby zde uváděla
							přesné a aktuální informace, veškeré informace a
							výhledy do budoucna zveřejněné na těchto webových
							stránkách jsou poskytované „tak, jak jsou“ a ohledem
							na svou dostupnost a společnost KryptoKurzy
							neposkytuje žádné výslovné či předpokládané záruky,
							včetně, ale nikoliv pouze, očekávané záruky
							v&nbsp;souvislosti s&nbsp;prodejností, neporušováním
							zákona nebo vhodností pro konkrétní účel.
						</p>
						<p>
							KryptoKurzy neposkytuje záruky v&nbsp;souvislosti
							s&nbsp;úplností, přesností, spolehlivostí,
							včasností, dostupností, nepřetržitým či bezchybným
							fungováním těchto webových stránek a jejich obsahu,
							dále ani v&nbsp;souvislosti s&nbsp;dodržováním
							platných právních předpisů a rovněž neručí za to, že
							tyto webové stránky nebo server, který je poskytuje,
							neobsahují viry či jiné škodlivé prvky.
						</p>
						<p>
							Využitím těchto webových stránek berete na vědomí
							riziko, že poskytované informace mohou být neúplné
							či nepřesné a nemusí odpovídat Vašim potřebám či
							požadavkům.
						</p>
						<p>
							<strong>Zřeknutí se odpovědnosti</strong>
							<br />
							KryptoKurzy ani jiné subjekty, které se podílejí na
							tvorbě, výrobě nebo publikování těchto webových
							stránek, za žádných okolností žádným způsobem
							neodpovídají za případné odškodné či újmy způsobené,
							související či plynoucí z&nbsp;přístupu na tyto
							webové stránky nebo nemožnosti přístupu na ně, dále
							neodpovídají za Vaše spoléhání se na informace zde
							poskytované, nefunkčnost webových stránek, chyby,
							opomenutí, přerušení spojení, závady, zpožděný
							přenos, počítačové viry, programové chyby apod.
						</p>
						<p>
							KryptoKurzy neodpovídá za přímé, nepřímé,
							související, následné, trestající ani speciální či
							jiné odškodnění, ztrátu příležitosti, ztrátu příjmu
							nebo jiné škody či odškodnění žádného druhu.
						</p>
						<p>
							<strong>Odkazy na jiné internetové stránky</strong>
							<br />
							Tyto webové stránky mohou obsahovat odkazy na webové
							stránky provozované jiným subjektem než KryptoKurzy.
							KryptoKurzy za takové stránky nepřebírá odpovědnost
							ani nemá kontrolu nad jejich obsahem nebo nad tím,
							jak jsou provozovány, a neodpovídá za odškodnění či
							újmy vzniklé v&nbsp;souvislosti s&nbsp;jejich
							obsahem či provozováním. Tyto odkazy neznamenají, že
							by KryptoKurzy schválila obsah jiných webových
							stránek.
						</p>
						<p>
							KryptoKurzy uvádí odkazy na jiné webové stránky pro
							potřeby uživatelů a přístup na jiné webové stránky,
							než jsou tyto, a využití jejich obsahu je na Vaše
							vlastní riziko.
						</p>
						<p>
							<strong>Změny</strong>
							<br />
							KryptoKurzy si vyhrazuje právo dle vlastního uvážení
							a bez předchozího oznámení obsah těchto webových
							stránek upravovat, měnit, nahrazovat či vymazat,
							jakož i právo omezit přístup na ně nebo je kdykoliv
							přestat provozovat.
						</p>
						<p>
							<strong>Autorské právo a používání obsahu</strong>
							<br />
							Přístupem na tyto webové stránky berete na vědomí a
							souhlasíte s&nbsp;tím, že je jejich obsah majetkem
							společnosti KryptoKurzy a je chráněný autorským
							právem. Dále berete na vědomí a zavazujete se
							respektovat skutečnost, že ochranné známky výrobků a
							služeb, obchodní jména, loga a výrobky zde
							zveřejněné jsou chráněné autorským právem
							celosvětově a nesmí být používány bez předchozího
							písemného souhlasu KryptoKurzy.
						</p>
						<p>
							Obsah těchto stránek není dovoleno stahovat,
							kopírovat, redistribuovat či ho dále šířit.
						</p>
						<p>
							<strong>Různé</strong>
							<br />
							Pokud bude některé z&nbsp;ustanovení tohoto
							prohlášení shledáno nezákonným, absolutně neplatným
							nebo nevykonatelným, není tím dotčena vykonatelnost
							ostatních ustanovení.
						</p>
						<p>
							<strong>Rozhodné právo a soudní příslušnost</strong>
							<br />
							Váš přístup na tyto webové stránky a využití jejich
							obsahu se řídí a je vykládán v&nbsp;souladu
							s&nbsp;právními předpisy České republiky bez ohledu
							na její pravidla pro volbu práva, a souhlasíte, že
							k&nbsp;řešení veškerých právních sporů vzniklých na
							základě tohoto prohlášení nebo v&nbsp;souvislosti
							s&nbsp;ním jsou příslušné soudy v České republice.
						</p>
					</div>
				</Text>
			</Container>
			<MailCTA />
			<Footer />
		</>
	);
}
