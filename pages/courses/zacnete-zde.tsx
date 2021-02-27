//---
//title: Začněte zde
//tags: btc eth bitcoin crypto začátečník
//---

import CourseLayout from "../../components/CourseLayout";
import { NextChakraLink } from "../../components/NextChakraLink";
import { Heading, Button } from "@chakra-ui/react";

export const metaData = {
	title: "Začněte zde",
	tags: "krypto,crypto,začátečník",
};

export default function ZacneteZde() {
	<CourseLayout>
		<Heading as="h1" size="2xl">
			Vítejte na jaknacrypto.cz 👋
		</Heading>
		Zde se dozvíte všechno co budete potřebovat aby jste se dostali do světa
		blockchainu a kryptoměn. Jsme na misi vzdělávat masy o transformačním
		potenciálu těchto technologií. Víme, že na začátku to může být trochu
		těžké, ale vše je přizpůsobené začátečníkům a obecné veřejnosti.
		Zavedeme v této sekci všechny potřebné termíny a pojmy aby jste se mohli
		vyznat ve světě blockchainu a kryptoměn. Pojďme tedy začít!
		<Heading as="h1" size="2xl">
			Co je to kryptoměna?
		</Heading>
		Kryptoměny si můžeme představit jako digitální peníze, můžeme si za ně
		koupit pivo v hospodě, koupit si za ně něco pěkného, můžeme si s nimi
		objednat výlet do zahraničí a rezervovat hotel nebo si uchovat pro horší
		časy a získávat na nich úrok. Nejsou náhodou peníze co máme na bankovním
		účtě, také digitální? Odpověď zní ano, ale nejsou zdaleka tak zajímavé
		jak kryptoměny. Peníze co máme v bance nebo v různých finančních
		službách jako je Revolut nebo Paypal jsou sice digitální, ale jsou
		spravované firmami a bankami narozdíl od kryptoměn. Tyto organizace se
		starají o uchovaní a převodu těchto peněz za Vás. Když chcete s vašimi
		penězi cokoliv udělat, musíte požádat tyto organizace aby to za vás
		provedli dle smlouvy co jste podepsali. Další velký rozdíl mezi
		kryptoměnami a penězi na bance je to, že když vložíte peníze do banky,
		tak ty peníze tam reálně nejsou, z vašich peněz se stane dlužní úpis
		(IOU), protože banka vám ručí, že si vaše peníze můžete kdykoliv vybrat,
		ale fyzicky nemají podložené všechny peníze všech lidí. Kdyby všichni si
		chtěli zároveň vybrat jejich peníze z banky, tak nemohou, protože banka
		by musela zlikvidovat veškeré aktiva do kterých dala peníze svých
		klientů a získat peníze co vypůjčila ostatním. U kryptoměn vy jste
		jediní majitelé vašich peněz. Když máte dejme tomu 1 BTC na nějaké
		adrese a máte privátní klíč co odemyká tu adresu, tak jste vlastníkem
		bitcoinů na té dané adrese. U kryptoměn nejsou organizace co by
		spravovali jejich průběh, ale samotní účastníci kryptoměnových sítí se
		starají o správné fungování a zpracování transakcí, tím že na svých
		počítačích pouštějí software, který se o vše tohle stará. Tyto počítače
		mezi sebou komunikují a udržují správný chod, zpracování všech transakcí
		a udržení bezpečnosti sítě. Můžete na těchto sítí mezi sebou posílat a
		přijímat bez prostředníků (bank, firem, …) tzv. decentralizovaně. Na to
		aby jste používali kryptoměny nepotřebujete se zaregistrovat na nějaké
		webové stránce. Stačí si stáhnout aplikaci na chytrý telefon a po pár
		minutách můžete ji začít používat.
		<Heading as="h2" size="lg">
			{" "}
			Proč jméno kryptoměna?{" "}
		</Heading>
		Kryptoměna se odvozuje z kombinace slov kryptografie a měna.
		Kryptografie je věda která se zabývá šifrováním zpráv, aby byly čitelné
		pouze za speciálních podmínek. Abychom toho dosáhli, potřebujeme hodně
		složitou matematiku, ale ta je již vepsaná v programech co běží na
		kryptoměnových sítí a tudíž uživatelé se tím vůbec nemusí trápit. Když
		už máme prostředky na to jak posílat a přijímat peníze na internetu a
		jsou “zadarmo”, tak proč bychom se měli zajímat o kryptoměny?
		Nepotřebujete povolení - Můžete si vytvořit kryptoměnovou adresu bez
		toho abyste museli kamkoliv zajít a nepotřebujete k tomu žádnou
		identifikaci. V centralizovaných platebních službách (banky, PayPal,
		Revolut, …) mohou být vaše transakce zrušeny nebo mohou být účty
		zmraženy, ale v kryptoměnách to nikdo nemůže udělat. Odolné vůči cenzuře
		- Díky struktuře blockchainových sítí (infrastruktura kryptoměn), je
		téměř nemožný aby se cenzurovali transakce na sítí. Ať jste kdo jste,
		tak můžete využívat kryptoměnové platební služby. Stejně jak Vám nikdo
		nemůže vypnout elektřinu kvůli tomu, že třeba volíte jinou politickou
		stranu, tak by nikdo neměl mít právo Vám odepřít základní užitkové
		služby jak mohou např. banky s Vašimi bankovními účty. Levné a rychlé
		převody - Můžete posílat peníze kamkoliv do světa během sekund a za
		téměř nulové poplatky narozdíl od mezinárodních bankovních převodů co si
		za své služby vybírají procentuální poplatky a trvají mnohokrát déle jak
		2 týdny.
		<Heading as="h1" size="2xl">
			Bitcoin
		</Heading>
		Co je <b style={{ color: "#ff9900" }}>₿</b> Bitcoin? Vidím na internetu
		články o tom a nevím co si mám pod tím představit. Bitcoin je první
		kryptoměna co kdy vznikla a dodnes je to největší a nejpopulárnější
		kryptoměna na trhu. **Zde se můžete dozvědět podrobnosti o tom co je
		Bitcoin:**
		<NextChakraLink
			href={"/courses/bitcoin"}
			_hover={{
				textDecoration: "none",
			}}
		>
			<Button
				display={["block"]}
				h={9}
				variant={"solid"}
				colorScheme={"orange"}
			>
				Bitcoin
			</Button>
		</NextChakraLink>
		<Heading as="h2" size="lg">
			Kdo vymyslel Bitcoin?
		</Heading>
		Zajímavé na Bitcoinu je, že nikdo neví kdo ho vymyslel. Jenom víme, že
		tvůrce se vydával na internetu pod anonymním pseudonymem Satoshi
		Nakamoto. Satoshi může být člověk, skupina lidí nebo podle některých
		konspiračních teorií, mimozemšťané. Satoshi publikoval 9-stránkový
		dokument v 2008 který popisoval jak Bitcoinový system fungoval. Po pár
		měsících, v 2009, první verze Bitcoinového softwaru byla vydána. Bitcoin
		poskytl základ pro spoustu dalších kryptoměn. Některé byly založené ze
		stejného softwaru, zatímco další projekty vzali rozdílný přístup k
		vytváření kryptoměn. Dobře, jaký je tedy rozdíl mezi všemi kryptoměny?
		Na to abychom rozepsali všechny rozdíly, by nám v této době trvalo
		několik měsíců, ale jsou různé vlastnosti podle kterých je můžeme
		rozlišovat. Dají se dělit na základě toho na jaké sítí (blockchainové)
		běží, jak moc jsou programovatelné, jestli patří pod nějaký projekt,
		podle využití, atd. V kryptoměnové komunitě je běžné rčení: Do your own
		research (DYOR), což přeložené z angličtiny znamená - prozkoumejte to
		samy za sebe. Tohle rčení napovídá lidem aby nepovažovali informace z
		jednoho zdroje jako pravdu, ale by si o daném tématu zjistili více a z
		více zdrojů aby si mohli vytvořit ucelenější názor. Dříve než
		investujete své peníze do konkrétního projektu, ujistěte se, že víte
		proč to děláte a udělali jste potřebný výzkum. V následující sekci se
		budeme zabývat technologií na které je postavena většina kryptoměn, tj.
		blockchain (/blokčejn/).
		<Heading as="h1" size="2xl">
			{" "}
			Co je blockchain?{" "}
		</Heading>
		Blockchain je typ databáze neboli datová struktura která není nijak
		složitá, ale dají se s ní vytvořit překvapivě zajímavé věci. Jedna ze
		zajímavých vlastností blockchainu je, že se do databáze mohou jen
		připisovat data na konec, nemohou se odebrat, upravit a ani se nemohou
		připsat do jiného místa než na konec. Další zajímavost je, že každá
		položka v databázi (tzv. block) má krytografický odkaz na předešlí
		block. Každý nový blok má digitální “otisk” (hash) předešlého.
		Blockchain je nezměnitelný: když změníte blok, tak se změní jeho otisk.
		Jelikož otisk je zapsaný v následujícím bloku, tak se změní i otisk
		následující bloku atd. Proto nemůžete změnit žádný blok uprostřed
		blockchainu a můžete do něj jen připisovat na konec. Tady tento domino
		efekt kde jeden blok je navázaný na další a má otisk předešlého se
		nazývá blockchain, nebo-li řetěz bloků. Když někdo vyšle transakci do
		sítě, dejme tomu, že Pepa chce poslat Honzovi 2 BTC a Jana chce poslat
		Dagmar 1 BTC, tak účastníci Bitcoinové síti kteří na svých počítačích
		mají spuštěný Bitcoinový software mohou tyhle transakce dát do bloku a
		připsat ho do blockchainu.
		<Heading as="h2" size="lg">
			Co brání lidem podvádět na Bitcoinové sítí?
		</Heading>
		Na to aby se transakce vůbec vyslala z nějaké Bitcoinové adresy, tak ta
		transakce musí být podepsaná otiskem privátního klíče (více o tomto
		později), takže jen majitel daných bitcoinů může vyslat transakci z jeho
		adresy a ne nikdo jiný. Všechny verifikace těchto transakcí probíhají
		přes tzv. Consensus (shodovým) algoritmem. **links to more articles**
		<Heading as="h1" size="2xl">
			Investování
		</Heading>
		Investoři hledají dlouhodobé příležitosti na základě vlastností a
		předpokladů daného aktiva. Například, můžeme měřit kolik nějaká firma
		vydělává a na základě toho určit jestli bude dlouhodobě růst. I když
		kryptoměny jsou nové a zcela jedinečné aktiva, mohou být pozorovány a
		rozebrány podobně jak tradiční investiční prostředky. Jedna zajímavost o
		většině bitcoinových investorů je, že mají tzv. HODL (držící) mentalitu.
		Tihle investoři věří Bitcoinu natolik, že nechtějí prodat své bitcoiny v
		dohledné budoucnosti nebo vůbec. Doporučujeme Vám přečíst náš návod o
		tom jak začít investovat do kryptoměn.
	</CourseLayout>;
}
